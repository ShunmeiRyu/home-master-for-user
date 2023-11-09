"use client"
import Link from "next/link";
import EmailInput from "../../../components/common/EmailInput";
import PwdInput from "../../../components/common/PwdInput";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from "react";

export default function Register() {
    const [checkInfo, setCheckInfo] = useState(true);
    const handleCheckInfo = () => {
        setCheckInfo(!checkInfo)
    }
    return (
        <div className="flex flex-col">
            <p className="mb-5 tracking-wider font-bold text-xl">会員登録</p>
            <EmailInput />
            <PwdInput first={true} check={true} />
            <PwdInput first={false} />
            <div className="font-sans text-xs font-normal mt-3 flex">
                <div onClick={handleCheckInfo} className="flex items-center mr-1">
                    {checkInfo ? <CheckBoxOutlineBlankIcon sx={{ fontSize: 16 }} /> : <CheckBoxIcon sx={{ fontSize: 16 }} />}
                </div>
                <Link href="/login" className="underline">利用規約</Link>・
                <Link href="/login" className="underline"> プライバシーポリシー</Link> に同意
            </div>
            <Link href="/login/register/verifyEmail" className="font-sans text-xs font-normal mt-3 underline self-center">verifyEmail</Link>
            <Link href="/login" className="font-sans text-xs font-normal mt-3 underline self-center">すでに会員の方はログイン</Link>
        </div>
    )
}