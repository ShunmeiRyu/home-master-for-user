"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import * as YUP from "yup"
import { useFormik } from "formik"

import EmailInput from "../../components/common/EmailInput"
import PwdInput from "../../components/common/PwdInput"
import Button from "../../components/common/Button"
import ButtonLoading from "../../components/common/ButtonLoading"

import { login } from "../../lib/login"
import { useError } from "../../components/context/ErrorContext"

export default function Login() {
  const [loading, setLoading] = useState(false)
  const { showError } = useError()

  const schema = YUP.object().shape({
    email: YUP.string().email().required(),
    password: YUP.string().min(8, "too short").max(16, "too long").required()
  })

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setLoading(true)
        const response = await login(values)
        console.log(response)
      } catch (error) {
        showError("ログイン失敗いたしました。もう一度お試しください。")
        if (error.response) {
          console.log(error.response.status)
        }
      } finally {
        setLoading(false)
      }
    }
  })

  return (
    <div className='flex flex-col'>
      <p className='mb-5 tracking-wider font-bold text-xl'>ログイン</p>
      <form onSubmit={loginForm.handleSubmit}>
        <EmailInput
          onChange={loginForm.handleChange}
          value={loginForm.values.email}
          isEmailValid={!!loginForm.errors.email}
        />
        <PwdInput
          first={true}
          onChange={loginForm.handleChange}
          value={loginForm.values.password}
        />
        <Link
          href='/login/forgetPwd'
          className='font-sans text-xs font-normal mt-3 underline ml-auto'
        >
          パスワードを忘れた場合
        </Link>
        {loading === true ? <ButtonLoading /> : <Button btnText='ログイン' />}
      </form>
      <Link
        href='/login/register'
        className='font-sans text-xs font-normal mt-3 underline self-center'
      >
        新規会員登録
      </Link>
    </div>
  )
}
