import React, { useState } from "react"

import SHA256 from "crypto-js/sha256"
import Base64 from "crypto-js/enc-base64"
import ENC from "crypto-js/enc-utf8"
import Hex from "crypto-js/enc-hex"

import CopyButton from "../../utilities/CopyButton"

interface CryptoStateProps {
  cryptoMethod: string
  inputText: string
  cryptoResult: string
}

export const Crypto = () => {
  const [method, setMethod] = useState("sha256")
  const [cryptoText, setCryptoText] = useState()
  const [cryptoResult, setCryptoResult] = useState()

  const changeMethod = (name: string) => {
    setMethod(name)
  }

  const changeInput = (input: string) => {
    setCryptoText(input)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (cryptoText) {
      let result = ""

      try {
        const input = cryptoText

        switch (method) {
          case "base64decode":
            const parsedWordArray = Base64.parse(input.toString())
            result = parsedWordArray.toString(ENC)
            break

          case "base64encode":
            const wordArray = ENC.parse(input.toString())
            result = Base64.stringify(wordArray)
            break

          case "sha256":
            result = SHA256(input).toString(Hex)
            break
        }
      } catch (error) {
        console.error(error)
        result = "Something went wrong. Are you sure this is a valid value?"
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

        {cryptoResult && (
          <CryptoResult result={cryptoResult}>
            <CopyButton data="cryptoResult" />
          </CryptoResult>
        )}
      </div>
    </section>
  )
}

const CryptoOptions = ({ onChangeMethod }) => {
  return (
    <div className="controls" onChange={(e) => onChangeMethod(e.target.value)}>
      <label className="radio">
        <input type="radio" value="base64decode" name="cryptoMethod" />
        <span>Base64 decode</span>
      </label>

      <label className="radio">
        <input type="radio" value="base64encode" name="cryptoMethod" />
        <span>Base64 encode</span>
      </label>

      <label className="radio">
        <input type="radio" value="sha256" name="cryptoMethod" defaultChecked />
        <span>SHA-256</span>
      </label>
    </div>
  )
}

const CryptoText = ({ input, onChangeInput }) => {
  return (
    <textarea
      className="input"
      name={"inputText"}
      onChange={(e) => onChangeInput(e.target.value)}
      id={"inputText"}
      value={input}
      required={true}
      autoComplete="off"
      aria-labelledby="label-inputText"
      rows={10}
    />
  )
}

const SubmitCrypto = ({ onSubmit }) => {
  return (
    <button type="submit" className="button" onClick={(e) => onSubmit(e)}>
      Transform
    </button>
  )
}

const CryptoResult = ({ result, children }) => {
  return (
    <p>
      Result: <br />
      <span id="cryptoResult" className="select-all text-mono">
        {result}
      </span>
      {children}
    </p>
  )
}

export default Crypto
