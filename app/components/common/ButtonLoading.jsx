"use client"
import Image from "next/image"
export default function ButtonLoading() {
  return (
    <div className="flex w-[20.3125rem] h-[3rem] flex-shrink-0
    bg-gun-powder-20 rounded-2xl
     justify-center items-center
    "
    >
      <button>
        <div className="animate-button-loading">
          <Image src="/images/loading.svg" width={24} height={24} /></div></button>
    </div >
  )
}
