"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as YUP from "yup"
import { useSearchParams } from "next/navigation"
import { changePassword, verifyEmail } from "../../../../lib/login"
import { useError } from "../../../../components/context/ErrorContext"

import PwdInput from "../../../../components/common/PwdInput"
import VrfCodeInput from "../../../../components/common/VrfCodeInput"
import Button from "../../../../components/common/Button"
import ButtonLoading from "../../../../components/common/ButtonLoading"

export default function ResetPwd() {
  const searchParams = useSearchParams()
  const { showError } = useError()
  const [VrfCode, setVrfCode] = useState("")
  const [email, setEmail] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const preEmail = searchParams.get("email")
    setEmail(preEmail)
  }, [searchParams])

  const getCode = (codeValue) => {
    setVrfCode(codeValue)
  }

  const schema = YUP.object().shape({
    password: YUP.string().min(8, "too short").max(16, "too long").required()
  })
  const resetPwdForm = useFormik({
    initialValues: {
      password: ""
    },
    validationSchema: schema,
    onSubmit: async (values, { setFieldValue }) => {
      setFieldValue("code", VrfCode)
      setFieldValue("email", email)
      console.log(values)
      try {
        setLoading(true)
        const verifyEmailResponse = await verifyEmail()

        if (verifyEmailResponse.success) {
          const changePasswordResponse = await changePassword(values)
        } else {
          console.log("Verify email failed")
        }
      } catch (error) {
        showError("新規失敗いたしました。もう一度お試しください。")
        console.log("ErrorCode:", error.response.status)
      } finally {
        setLoading(false)
      }
    }
  })
  return (
    <div className='flex flex-col'>
      <p className='mb-5 tracking-wider font-bold text-xl'>パスワード新規</p>
      <div>email:{email}</div>
      <form onSubmit={resetPwdForm.handleSubmit}>
        <VrfCodeInput getCode={getCode} />
        <PwdInput
          onChange={resetPwdForm.handleChange}
          value={resetPwdForm.values.password}
          first={true}
          check={true}
        />
        <PwdInput first={false} />
        {loading === true ? <ButtonLoading /> : <Button btnText='新規' />}
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
