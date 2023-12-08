"use client"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import clsx from "clsx"

export default function EmailInput({ onChange, value, isEmailValid }) {
  const iconClassName = clsx({
    "text-sunglow-100": isEmailValid,
    "text-gun-powder-60": !isEmailValid
  })

  return (
    <div>
      <label
        htmlFor='email'
        className='block mb-3 text-base font-sans font-semibold tracking-tight leading-tight'
      >
        メールアドレス
      </label>
      <div className='relative'>
        <input
          id='email'
          name="email"
          type='email'
          className='appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight font-sans text-sm font-normal h-10'
          placeholder='メールアドレスを入力'
          onChange={onChange}
          value={value}
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
          <CheckCircleIcon className={iconClassName} sx={{ fontSize: 16 }} />
        </div>
      </div>
    </div>
  )
}
