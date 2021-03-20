import React, { useState, useEffect } from "react"
import { GenerateRandomNumber } from "../../utilities/random"

const MIN_DURATION = 0
const DEFAULT_DURATION = 15
const MAX_DURATION = 1800

export const Race = () => {
  const [currentRacer, setCurrentRacer] = useState("")
  const [racers, setRacers] = useState([])
  const [started, setStarted] = useState(false)
  const [sound, setSound] = useState(false)
  const [duration, setDuration] = useState("15")

  const changeCurrentRacer = (name: string) => {
    setCurrentRacer(name)
  }

  const addRacer = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newRacer = currentRacer
    const id = racers.length

    setRacers((prevRacers) => [
      ...prevRacers,
      { name: newRacer, id: id, deleted: false },
    ])

    setCurrentRacer("")
  }

  const deleteRacer = (id: number) => {
    const racerList = racers.reduce(function (filtered, racer) {
      if (racer.id !== id) {
        filtered.push(racer)
      } else {
        racer.deleted = true
        filtered.push(racer)
      }
      return filtered
    }, [])

    setRacers(racerList)
  }

  const startRace = () => {
    // Check if duration is filled in. If not, fall back to default

    if (!duration || isNaN(parseInt(duration, 10))) {
      setDuration(DEFAULT_DURATION.toString())
    }

    setStarted(true)
  }

  const toggleSound = () => {
    const enableSound = !sound
    setSound(enableSound)
  }

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
    <section>
      <div className="wrapper">
        <form>
          <div className="row">
            <RacerInput
              racer={currentRacer}
              onChangeRacer={(name: string) => changeCurrentRacer(name)}
            />
            <AddRacerButton
              isDisabled={started || !currentRacer.length ? true : false}
              addRacer={(e: React.ChangeEvent<HTMLInputElement>) => addRacer(e)}
            />
            <StartRaceButton
              isDisabled={started || racers.length === 0 ? true : false}
              startRace={startRace}
            />
          </div>
          <RaceSettings duration={duration} sound={sound}>
            <EnableSound sound={sound} toggleSound={toggleSound} />
            <SetDuration
              duration={duration}
              onDurationChange={(seconds: string) => changeDuration(seconds)}
            />
          </RaceSettings>
        </form>

        <RaceCanvas started={started}>
          <ul role="list" className="list-none list--racers">
            {racers.map((racer) =>
              racer.deleted ? null : (
                <li className="racer" key={racer.id}>
                  <Racer name={racer.name}>
                    <RacerDeleteButton
                      id={racer.id}
                      deleteRacer={(id: number) => deleteRacer(id)}
                    />
                  </Racer>
                  {started && <RacerScore duration={duration} />}
                </li>
              )
            )}
          </ul>
        </RaceCanvas>
      </div>
    </section>
  )
}

const RaceCanvas = ({ children, started }) => {
  return (
    <>
      <div className={`race-canvas ${started ? "race-started" : ""}`}>
        {children}
      </div>
    </>
  )
}

const Racer = ({ children, name }) => {
  return (
    <div className="racer--details">
      {name}
      {children}
    </div>
  )
}

const RacerDeleteButton = ({ id, deleteRacer }) => {
  return (
    <button
      className="button__reset icon"
      aria-label="Remove participant"
      title="Remove participant"
      onClick={() => deleteRacer(id)}
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
}

const RacerScore = ({ duration }) => {
  const [counter, setCounter] = useState(0)
  const [score, setScore] = useState(80) // size of nyan cat

  useEffect(() => {
    counter < duration * 10 && setTimeout(() => setCounter(counter + 1), 100)
    const random = GenerateRandomNumber(score, score + 100)
    setScore(random)
  }, [counter])

  return (
    <div className="track">
      <div className="track--wrapper" style={{ width: score + "px" }}>
        <div
          className="track--progress"
          // style={{ width: score - 80 + "px" }}
        ></div>
        <div className="track--cat"></div>
      </div>
    </div>
  )
}

const RacerInput = ({ racer, onChangeRacer }) => {
  return (
    <input
      type="text"
      name="racer"
      autoComplete="off"
      value={racer}
      onChange={(e) => onChangeRacer(e.target.value)}
      className="input"
      placeholder="Racer name"
    />
  )
}

const AddRacerButton = ({ isDisabled, addRacer }) => {
  return (
    <button
      type="submit"
      className="button"
      onClick={(e) => addRacer(e)}
      disabled={isDisabled}
    >
      Add
    </button>
  )
}

const StartRaceButton = ({ isDisabled, startRace }) => {
  return (
    <button onClick={startRace} className="button" disabled={isDisabled}>
      Start!
    </button>
  )
}

const RaceSettings = ({ children, sound, duration }) => {
  const soundEnabled = sound
  const raceDuration = isNaN(duration) ? DEFAULT_DURATION : duration

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

const EnableSound = ({ sound, toggleSound }) => {
  return (
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
}

const SetDuration = ({ duration, onDurationChange }) => {
  return (
    <>
      <div className="row">
        <label htmlFor="duration">Duration (seconds):</label>
      </div>
      <div className="row">
        <input
          type="number"
          id="duration"
          name="duration"
          min={MIN_DURATION}
          max={MAX_DURATION}
          required={true}
          value={duration}
          onChange={(e) => onDurationChange(e.target.value)}
        ></input>
      </div>
    </>
  )
}

export default Race
