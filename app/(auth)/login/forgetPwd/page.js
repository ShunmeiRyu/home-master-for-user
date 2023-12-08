"use client"
import Link from "next/link"
import { useState } from "react"
import * as YUP from "yup"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"

import EmailInput from "../../../components/common/EmailInput"
import Button from "../../../components/common/Button"
import ButtonLoading from "../../../components/common/ButtonLoading"

import { resendCode } from "../../../lib/login"
import { useError } from "../../../components/context/ErrorContext"

export default function ForgetPwd() {
  const router = useRouter()
  const { showError } = useError
  const [loading, setloading] = useState(false)

  const schema = YUP.object().shape({
    email: YUP.string().email().required()
  })

  const forgetPwdForm = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        setloading(true)
        const response = await resendCode(values)
        console.log(response)
        router.push(`/login/forgetPwd/resetPwd?email=${values.email}`)
      } catch (error) {
        showError("送信に失敗いたしました。もう一度お試しください。")
        if (error.response) {
          console.log(error.response.status)
        }
      } finally {
        setloading(false)
      }
    }
  })

  return (
    <div className='flex flex-col'>
      <p className='mb-5 tracking-wider font-bold text-xl'>パスワード再設定</p>
      <p className='font-sans text-xs font-normal mb-5'>
        6桁の確認コードをdemo@gotask.co.jp宛にメールしましたので、下のボックスにコードを入力してメールを確認してください。
      </p>
      <form onSubmit={forgetPwdForm.handleSubmit}>
        <EmailInput
          onChange={forgetPwdForm.handleChange}
          value={forgetPwdForm.values.email}
          isEmailValid={!!forgetPwdForm.errors.email}
        />
        {loading === true ? <ButtonLoading /> : <Button btnText='送信' />}
      </form>
      <Link
        href='/login'
        className='font-sans text-xs font-normal mt-3 underline self-center'
      >
        すでに会員の方はログイン
      </Link>
    </div>
  )
}
