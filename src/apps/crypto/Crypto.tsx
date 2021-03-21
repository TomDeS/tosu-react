import React, { useState } from 'react'

import SHA256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64'
import ENC from 'crypto-js/enc-utf8'
import Hex from 'crypto-js/enc-hex'

import CopyButton from '../../utilities/CopyButton'

interface CryptoOptionsProps {
  onChangeMethod(e: string): any
}

interface CryptoTextProps {
  input: string
  onChangeInput(e: string): any
}

interface SubmitCryptoProps {
  onSubmit(e: any): any
}

interface CryptoResultProps {
  result: string
  children: React.ReactNode
}

const CryptoOptions: React.FC<CryptoOptionsProps> = ({ onChangeMethod }) => (
  <div className="controls" onChange={(e) => onChangeMethod(e.target.value)}>
    <label className="radio" htmlFor="base64-decode">
      <input
        id="base64-decode"
        type="radio"
        value="base64decode"
        name="cryptoMethod"
      />
      <span>Base64 decode</span>
    </label>

    <label className="radio" htmlFor="base64-encode">
      <input
        id="base64-encode"
        type="radio"
        value="base64encode"
        name="cryptoMethod"
      />
      <span>Base64 encode</span>
    </label>

    <label className="radio" htmlFor="sha-256">
      <input
        id="sha-256"
        type="radio"
        value="sha256"
        name="cryptoMethod"
        defaultChecked
      />
      <span>SHA-256</span>
    </label>
  </div>
)

const CryptoText: React.FC<CryptoTextProps> = ({ input, onChangeInput }) => (
  <textarea
    className="input"
    name="inputText"
    onChange={(e) => onChangeInput(e.target.value)}
    id="inputText"
    value={input}
    required
    autoComplete="off"
    aria-labelledby="label-inputText"
    rows={10}
  />
)

const SubmitCrypto: React.FC<SubmitCryptoProps> = ({ onSubmit }) => (
  <button type="submit" className="button" onClick={(e) => onSubmit(e)}>
    Transform
  </button>
)

const CryptoResult: React.FC<CryptoResultProps> = ({ result, children }) => (
  <>
    <span id="cryptoResult" className="select-all text-mono">
      {result}
    </span>
    {children}
  </>
)

export const Crypto: React.FC = () => {
  const [method, setMethod] = useState<string>('sha256')
  const [cryptoText, setCryptoText] = useState<string>()
  const [cryptoResult, setCryptoResult] = useState<string>()

  const changeMethod = (name: string) => {
    setMethod(name)
  }

  const changeInput = (input: string) => {
    setCryptoText(input)
  }

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (cryptoText) {
      let result = ''

      try {
        const input = cryptoText

        switch (method) {
        case 'base64decode': {
          const parsedWordArray = Base64.parse(input?.toString() ?? '')
          result = parsedWordArray.toString(ENC)
          break
        }

        case 'base64encode': {
          const wordArray = ENC.parse(input?.toString() ?? '')
          result = Base64.stringify(wordArray)
          break
        }

        case 'sha256': {
          result = SHA256(input ?? '').toString(Hex)
          break
        }

        default: {
          result = 'Strange things are happening'
        }
        }
      } catch (error) {
        console.error(error)
        result = 'Something went wrong. Are you sure this is a valid value?'
      }

      setCryptoResult(result)
    }
  }

  return (
    <section>
      <div className="wrapper">
        <form>
          <CryptoOptions
            onChangeMethod={(name: string) => changeMethod(name)}
          />
          <CryptoText
            input={cryptoText}
            onChangeInput={(input: string) => changeInput(input)}
          />
          <SubmitCrypto
            onSubmit={(e: React.ChangeEvent<HTMLInputElement>) => onSubmit(e)}
          />
        </form>

        <p>
          Result: <br />
          {!cryptoResult && (
            <span id="cryptoResult" className="select-all text-mono">
              Just waiting for you to enter data and press the button...
            </span>
          )}
          {cryptoResult && (
            <CryptoResult result={cryptoResult}>
              <CopyButton data="cryptoResult" />
            </CryptoResult>
          )}
        </p>
      </div>
    </section>
  )
}

export default Crypto
