"use client"
export default function Button(props) {
  const { btnText, handleClick } = props

  return (
    <div className=" flex  flex-col my-10 items-center"><button
      className="w-[20.3125rem] h-[3rem] flex-shrink-0
    bg-sunglow-100 rounded-2xl
     text-gun-powder-100 text-center font-inter
     text-[1rem] not-italic font-bold leading-[1.2rem]
     tracking-[0.0035rem]"
      type="submit"
      onClick={handleClick}
    >{btnText}
    </button>
    </div>
  )
}
