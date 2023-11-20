"use client"
import Link from "next/link";
import EmailInput from "../../../components/common/EmailInput";
import PwdInput from "../../../components/common/PwdInput";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from "react";
import AuthButton from "../../../components/common/AuthButton";

export default function Register() {
    const [checkInfo, setCheckInfo] = useState(true);
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
    const handleCheckInfo = () => {
        setCheckInfo(!checkInfo)
    }

    async function postRegister(data) {
        try {
            const response = await serviceAxios.post("/user", data);
            console.log("response:", response);
            return response;
        } catch {
            console.error("Error posting data:");
            throw error;
        }
    }


    return (
        <div className="flex flex-col">
            <p className="mb-5 tracking-wider font-bold text-xl">会員登録</p>
            <EmailInput onEmailChange={handleEmailChange} />
            <PwdInput first={true} check={true} onPwdChange={handlePwdChange} />
            <PwdInput first={false} onPwdChange={handlePwdChange} />
            <div className="font-sans text-xs font-normal mt-3 flex">
                <div onClick={handleCheckInfo} className="flex items-center mr-1">
                    {checkInfo ? <CheckBoxOutlineBlankIcon sx={{ fontSize: 16 }} /> : <CheckBoxIcon sx={{ fontSize: 16 }} />}
                </div>
                <Link href="/login" className="underline">利用規約</Link>・
                <Link href="/login" className="underline"> プライバシーポリシー</Link> に同意
            </div>
            <AuthButton btnText="登録" href="/register/verifyEmail" api={postRegister} data={data} />
            <Link href="/login" className="font-sans text-xs font-normal mt-3 underline self-center">すでに会員の方はログイン</Link>
        </div>
    )
}