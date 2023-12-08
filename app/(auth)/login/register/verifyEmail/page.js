"use client"
import Link from "next/link"
import VrfCodeInput from "../../../../components/common/VrfCodeInput"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

import Button from "../../../../components/common/Button"
import ButtonLoading from "../../../../components/common/ButtonLoading"

import { verifyEmail } from "../../../../lib/login"
import { useError } from "../../../../components/context/ErrorContext"

export default function VerifyEmail() {
  const [loading, setLoading] = useState(false)
  const [VrfCode, setVrfCode] = useState("")
  const [email, setEmail] = useState(null)
  const searchParams = useSearchParams()
  const { showError } = useError()

  useEffect(() => {
    const preEmail = searchParams.get("email")
    setEmail(preEmail)
  }, [searchParams])

  const getCode = (value) => {
    setVrfCode(value)
    console.log(VrfCode)
  }

  const handleVerifyPrama = {
    email: email,
    VrfCode: VrfCode
  }
  const handleVerify = async () => {
    try {
      setLoading(true)
      const response = await verifyEmail(handleVerifyPrama)
      console.log(response)
    } catch (error) {
      showError("検証失敗いたしました。もう一度お試しください。")
      console.log(error.response.status)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='flex flex-col'>
      <p className='mb-5 tracking-wider font-bold text-xl'>メール検証</p>
      <p className='font-sans text-xs font-normal mb-5'>
        6桁の確認コードをdemo@gotask.co.jp宛にメールしましたので、下のボックスにコードを入力してメールを確認してください。
      </p>
      <VrfCodeInput getCode={getCode} />
      {loading === true ? (
        <ButtonLoading />
      ) : (
        <Button btnText='検証' handleClick={handleVerify} />
      )}
      <p className='font-sans text-xs font-normal mb-5 self-center'>
        コードをお持ちでない場合は、
        <Link href='/login' className='underline'>
          コード再送信
        </Link>
      </p>
      <Link
        href='/login'
        className='font-sans text-xs font-normal mt-3 underline self-center'
      >
        すでに会員の方はログイン
      </Link>
    </div>
  )
}
