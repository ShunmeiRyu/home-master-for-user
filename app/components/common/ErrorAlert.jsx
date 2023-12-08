"use client"
import { useError } from "../context/ErrorContext"
import CloseIcon from "@mui/icons-material/Close"
import Image from "next/image"

export default function ErrorAlert() {
  const { errorMsg, isVisible, hideError } = useError()

  if (!isVisible) {
    return null
  }
  return (
    <div className="absolute w-full h-screen pt-[0.6875rem] pr-[1.125rem] pb-[43.8125rem] pl-[1.0625rem] bg-slate-400 bg-opacity-50 z-40">
      <div className="absolute top-2 left-5 rounded-lg bg-alert flex w-[21.25rem] p-[0.75rem] pr-[0.5rem] py-[0.9375rem] items-start m-2 z-50">

        <Image src="/images/warning.svg" width={24} height={24} />
        <div className="text-gun-powder-100 ml-3">
          <h3 className="font-public-sans text-[1rem] font-semibold leading-24">エラー</h3>
          <p className="font-public-sans text-[0.875rem] font-normal leading-22">{errorMsg}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md p-1.5"
              onClick={hideError}
            >
              <span className="sr-only">Dismiss</span>
              <CloseIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
