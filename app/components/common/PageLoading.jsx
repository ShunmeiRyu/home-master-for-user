"use client"
import Image from "next/image"
export default function PageLoading() {
  return (
    <div className="flex-shrink-0 flex items-center justify-center
    w-[23.4375rem] h-[50.75rem]
    p-[2.125rem] pb-[2.5rem]">
      <div className="animate-button-loading">
        <Image src="/images/loading.svg" width={64} height={64} />
      </div>
    </div>
  )
}
