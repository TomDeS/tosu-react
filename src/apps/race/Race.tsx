import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import settings from '@/config/config'
import randomNumber from '@/utilities/random'
import round from '@/utilities/round'
import nyan from '@/sound/nyan.mp3'
import { useSnackbar } from '@/hooks/useSnackbar'
import Snackbar from '@/components/Snackbar'

const { MIN_DURATION, DEFAULT_DURATION, MAX_DURATION } = settings.race

interface RacersProps {
  name?: string
  id?: number
  deleted?: boolean
  score: number
  cubicBezier: number[]
}

interface RaceCanvasProps {
  children: React.ReactNode
  started: boolean
  ended: boolean
}

interface RacerProps {
  children: React.ReactNode
  name: string
  score: number
}

interface RacerDeleteButtonProps {
  id: number
  deleteRacer(id: number): number
  isDisabled: boolean
}
interface RacerScoreProps {
  score: number
  cubicBezier: number[]
  duration: string
}

interface RacerInputProps {
  racer: string
  onChangeRacer(e: string): any
  isDisabled: boolean
}

interface AddRacerButtonProps {
  isDisabled: boolean
  addRacer(e: any): any
}

interface StartRaceButtonProps {
  isDisabled: boolean
  startRace(): any
}

interface RaceSettingsProps {
  children: React.ReactNode
  sound: boolean
  duration: string
}

interface EnableSoundProps {
  sound: string
  toggleSound(): any
}

interface SetDurationProps {
  duration: string
  onDurationChange(e: string): any
  isDisabled: boolean
}

const RaceCanvas: React.FC<RaceCanvasProps> = ({
  children,
  started,
  ended,
}) => {
  let classes = ''

  if (started) {
    classes = 'race__started'
  }

  if (ended) {
    classes = 'race__ended'
  }

  return (
    <>
      <div className={`race--canvas  full-width ${classes}`}>{children}</div>
    </>
  )
}
const Racer: React.FC<RacerProps> = ({ children, name, score }) => (
  <>
    {children}
    <span className="racer--details">
      {name} <small>{score > 0 ? `${score}m` : ''}</small>
    </span>
  </>
)

const RacerDeleteButton: React.FC<RacerDeleteButtonProps> = ({
  id,
  deleteRacer,
  isDisabled,
}) => (
  <button
    className="button__reset icon icon__right"
    aria-label="Remove participant"
    title="Remove participant"
    onClick={() => deleteRacer(id)}
    type="button"
    disabled={isDisabled}
  >
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      width="48px"
      height="48px"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  </button>
)

const RacerScore: React.FC<RacerScoreProps> = ({
  score,
  cubicBezier,
  duration,
}) => {
  const cb = cubicBezier.join(', ')

  const style = {
    width: `${score}%`,
    transition: `width ${duration}s cubic-bezier(${cb})`,
  }

  return (
    <div className="track--wrapper" style={style}>
      <div className="track--progress" />
      <div className="track--cat" title={`progress: ${score}m`} />
    </div>
  )
}

const RacerInput: React.FC<RacerInputProps> = ({
  racer,
  onChangeRacer,
  isDisabled,
}) => (
  <input
    type="text"
    name="racer"
    autoComplete="off"
    value={racer}
    onChange={(e) => onChangeRacer(e.target.value)}
    className="input"
    placeholder="Racer name"
    disabled={isDisabled}
  />
)

const AddRacerButton: React.FC<AddRacerButtonProps> = ({
  isDisabled,
  addRacer,
}) => (
  <button
    type="submit"
    className="button"
    onClick={(e) => addRacer(e)}
    disabled={isDisabled}
  >
    Add
  </button>
)

const StartRaceButton: React.FC<StartRaceButtonProps> = ({
  isDisabled,
  startRace,
}) => (
  <button
    onClick={startRace}
    className="button"
    disabled={isDisabled}
    type="button"
  >
    Start!
  </button>
)

const RaceSettings: React.FC<RaceSettingsProps> = ({
  children,
  sound,
  duration,
}) => {
  const soundEnabled = sound
  const raceDuration = Number.isNaN(parseInt(duration, 10))
    ? DEFAULT_DURATION
    : duration

  return (
    <div className="row">
      <details>
        <summary>
          Settings
          <span className="icon">
            {soundEnabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="48px"
                height="48px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="48px"
                height="48px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
              </svg>
            )}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="48px"
              height="48px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
            </svg>
          </span>
          <small>{raceDuration}</small>
        </summary>
        {children}
      </details>
    </div>
  )
}

const EnableSound: React.FC<EnableSoundProps> = ({ sound, toggleSound }) => (
  <label className="checkbox" htmlFor="sound">
    <input
      type="checkbox"
      id="sound"
      name="sound"
      onChange={toggleSound}
      value={sound}
    />
    <span>Enable sound</span>
  </label>
)

const SetDuration: React.FC<SetDurationProps> = ({
  duration,
  onDurationChange,
  isDisabled,
}) => (
  <>
    <div className="row">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="duration">Duration (seconds):</label>
    </div>
    <div className="row">
      <input
        type="number"
        id="duration"
        name="duration"
        min={MIN_DURATION}
        max={MAX_DURATION}
        required
        value={duration}
        onChange={(e) => onDurationChange(e.target.value)}
        disabled={isDisabled}
      />
    </div>
  </>
)

export const Race: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentRacer, setCurrentRacer] = useState<string>('')
  const [racers, setRacers] = useState<RacersProps[]>([])
  const [started, setStarted] = useState<boolean>(false)
  const [sound, setSound] = useState<boolean>(false)
  const [duration, setDuration] = useState<string>('5')
  const [counter, setCounter] = useState<number>(0)
  const [ended, setEnded] = useState<boolean>(false)

  const totalDuration: number = parseInt(duration, 10)
  const { isActive, message, openSnackbar } = useSnackbar()

  const [playNyan, { stop }] = useSound(nyan, {
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  })

  const changeCurrentRacer = (name: string) => {
    setCurrentRacer(name)
  }

  const addRacer = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newRacer = currentRacer
    const id: any[] = racers?.length

    // set score
    const rndm = round(randomNumber(50, 100, false))
    const racerScore = rndm > 100 ? 100 : rndm // avoid results like 100.86%
    const cube = Array.from(Array(4)).map(() =>
      round(randomNumber(1, 9, false) / 10)
    )

    setRacers((prevRacers: any[]) => [
      ...prevRacers,
      {
        name: newRacer,
        id,
        deleted: false,
        score: racerScore,
        cubicBezier: cube,
      },
    ])

    setCurrentRacer('')
  }

  const deleteRacer = (id: number) => {
    const racerList = racers?.reduce(
      (filtered: RacersProps[], racer: RacersProps) => {
        if (racer.id !== id) {
          filtered.push(racer)
        } else {
          // eslint-disable-next-line no-param-reassign
          racer.deleted = true
          filtered.push(racer)
        }
        return filtered
      },
      []
    )

    openSnackbar('Competitor eliminated')

    setRacers(racerList)
  }

  const startRace = () => {
    // Check if duration is valid and filled in. If not, fall back to default
    if (!duration || Number.isNaN(parseInt(duration, 10))) {
      setDuration(DEFAULT_DURATION.toString())
    }

    setStarted(true)

    if (sound) {
      playNyan()
    }
  }

  // Monitor if started. This is a trigger for the counter
  useEffect(() => {
    if (started) {
      setCounter(1)
    }
  }, [started])

  // Trigger the counter
  useEffect(() => {
    if (started) {
      if (counter <= totalDuration) {
        setTimeout(() => setCounter(counter + 1), 1000)

        // Loop sound
        if (!isPlaying && sound) {
          playNyan()
        }
      } else {
        stop()
        setEnded(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  const toggleSound = () => {
    const enableSound = !sound
    setSound(enableSound)
  }

  // Play/stop sound on toggle
  useEffect(() => {
    if (started && sound && !isPlaying && counter < totalDuration) {
      playNyan()
    } else {
      stop()
      setIsPlaying(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sound])

  const changeDuration = (seconds: string) => {
    const int = parseInt(seconds, 10)
    let result = int

    if (int < MIN_DURATION) {
      result = MIN_DURATION
    } else if (int > MAX_DURATION) {
      result = MAX_DURATION
    }

    setDuration(result.toString())
  }

  return (
    <>
      <form>
        <div className="row">
          <RacerInput
            racer={currentRacer}
            onChangeRacer={(name: string) => changeCurrentRacer(name)}
            isDisabled={!!started}
          />
          <AddRacerButton
            isDisabled={!!(started || !currentRacer.length)}
            addRacer={(e: React.ChangeEvent<HTMLInputElement>) => addRacer(e)}
          />
          <StartRaceButton
            isDisabled={!!(started || racers.length === 0)}
            startRace={startRace}
          />
        </div>
        <RaceSettings duration={duration} sound={sound}>
          <EnableSound sound={sound} toggleSound={toggleSound} />
          <SetDuration
            duration={duration}
            onDurationChange={(seconds: string) => changeDuration(seconds)}
            isDisabled={!!started}
          />
        </RaceSettings>
      </form>

      <RaceCanvas started={started} ended={ended}>
        <ul className="list-none list--racers">
          {racers.map((racer) =>
            racer.deleted ? null : (
              <li className="racer" key={racer.id}>
                <Racer name={racer.name || ''} score={ended ? racer.score : 0}>
                  <RacerDeleteButton
                    id={racer.id}
                    deleteRacer={(id: number) => deleteRacer(id)}
                    isDisabled={!!started}
                  />
                </Racer>
                <RacerScore
                  score={started ? racer.score : 0}
                  cubicBezier={racer.cubicBezier}
                  duration={duration}
                />
              </li>
            )
          )}
        </ul>
      </RaceCanvas>
      <Snackbar isActive={isActive} message={message} />
    </>
  )
}

export default Race
