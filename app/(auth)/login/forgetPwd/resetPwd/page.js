import Link from "next/link";
import EmailInput from "../../../../components/common/EmailInput";
import PwdInput from "../../../../components/common/PwdInput";

export default function ResetPwd() {
    return (
        <div className="flex flex-col">
            <p className="mb-5 tracking-wider font-bold text-xl">パスワード新規</p>
            <EmailInput />
            <PwdInput first={true} check={true}/>
            <PwdInput first={false} />
            <Link href="/login" className="font-sans text-xs font-normal mt-3 underline self-center">すでに会員の方はログイン</Link>
        </div>
    )
}