"use client"
import { useState } from "react"
import ErrorAlert from "./ErrorAlert"
import ButtonLoading from "./ButtonLoading"

export default function Button(props) {
  const { btnText, handleClick } = props
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleButtonClick = async () => {
    setIsLoading(true)
    setError(null)
    try {
      if (handleClick) {
        await handleClick()
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div><button
      className="w-[20.3125rem] h-[3rem] flex-shrink-0
    bg-sunglow-100 rounded-2xl
     text-gun-powder-100 text-center font-inter
     text-[1rem] not-italic font-bold leading-[1.2rem]
     tracking-[0.0035rem]"
      onClick={handleButtonClick}>{isLoading ? <ButtonLoading /> : btnText}
    </button>
      {error && <ErrorAlert errorMsg={error} />}
    </div>
  )
}
