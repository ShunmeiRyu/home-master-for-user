"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useFormik } from "formik"
import * as YUP from "yup"

import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"

import Button from "../../../components/common/Button"
import ButtonLoading from "../../../components/common/ButtonLoading"
import EmailInput from "../../../components/common/EmailInput"
import PwdInput from "../../../components/common/PwdInput"

import { register } from "../../../lib/login"
import { useError } from "../../../components/context/ErrorContext"

export default function Register() {
  const router = useRouter()
  const { showError } = useError()
  const [checkInfo, setCheckInfo] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleCheckInfo = () => {
    setCheckInfo(!checkInfo)
  }
  const schema = YUP.object().shape({
    email: YUP.string().email().required(),
    password: YUP.string().min(8, "too short").max(16, "too long").required()
  })
  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setLoading(true)
        const response = await register(values)
        console.log(response)
        router.push(`/login/register/verifyEmail?email=${values.email}`)
      } catch (error) {
        showError("登録失敗いたしました。もう一度お試しください。")
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
      <p className='mb-5 tracking-wider font-bold text-xl'>会員登録</p>
      <form onSubmit={registerForm.handleSubmit}>
        <EmailInput
          onChange={registerForm.handleChange}
          value={registerForm.values.email}
          isEmailValid={!!registerForm.errors.email}
        />
        <PwdInput
          first={true}
          check={true}
          onChange={registerForm.handleChange}
          value={registerForm.values.password}
        />
        <PwdInput first={false} />
        <div className='font-sans text-xs font-normal mt-3 flex'>
          <div onClick={handleCheckInfo} className='flex items-center mr-1'>
            {checkInfo ? (
              <CheckBoxOutlineBlankIcon sx={{ fontSize: 16 }} />
            ) : (
              <CheckBoxIcon sx={{ fontSize: 16 }} />
            )}
          </div>
          <Link href='/login' className='underline'>
            利用規約
          </Link>
          ・
          <Link href='/login' className='underline'>
            {" "}
            プライバシーポリシー
          </Link>{" "}
          に同意
        </div>
        {loading === true ? <ButtonLoading /> : <Button btnText='登録' />}
      </form>
      <Link
        href='/login'
        className='font-sans text-xs font-normal underline self-center'
      >
        すでに会員の方はログイン
      </Link>
    </div>
  )
}
