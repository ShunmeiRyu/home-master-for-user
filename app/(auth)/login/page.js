"use client"
import Link from "next/link";
import EmailInput from "../../components/common/EmailInput";
import PwdInput from "../../components/common/PwdInput";
import AuthButton from "../../components/common/AuthButton";
import { useState } from "react";
import serviceAxios from "../../api/axiosInstance";

export default function Login() {
    const [email, setEmail] = useState("");
    const handleEmailChange = (email) => {
        setEmail(email);
    };
    const [pwd, setPwd] = useState("");
    const handlePwdChange = (pwd) => {
        setPwd(pwd);
    };

    const data = {
        "email": email,
        "password": pwd
    };

    async function postLogin(data) {
        try {
            
            const response = await serviceAxios.post("/user/token", data);
            console.log("response:", response);
            return response;
        } catch {
            console.error("Error posting data:", error);
            throw error;
        }
    }

    return (
        <div className="flex flex-col">
            <p className="mb-5 tracking-wider font-bold text-xl">ログイン</p>
            <EmailInput onEmailChange={handleEmailChange} />
            <PwdInput first={true} onPwdChange={handlePwdChange} />
            <Link href="/login/forgetPwd" className="font-sans text-xs font-normal mt-3 underline ml-auto">パスワードを忘れた場合</Link>
            <AuthButton btnText="ログイン" href="/register/verifyEmail" api={postLogin} data={data} />
            <Link href="/login/register" className="font-sans text-xs font-normal mt-3 underline self-center">新規会員登録</Link>
        </div>
    )
}