import Link from "next/link";
import EmailInput from "../../../components/common/EmailInput";
import AuthButton from "../../../components/common/AuthButton";

export default function ForgetPwd() {
    return (
        <div className="flex flex-col">
            <p className="mb-5 tracking-wider font-bold text-xl">パスワード再設定</p>
            <p className="font-sans text-xs font-normal mb-5">6桁の確認コードをdemo@gotask.co.jp宛にメールしましたので、下のボックスにコードを入力してメールを確認してください。</p>
            <EmailInput />
            <AuthButton btnText="送信" href="/forgetPwd/resetPwd" />
            <Link href="/login" className="font-sans text-xs font-normal mt-3 underline self-center">すでに会員の方はログイン</Link>
        </div>
    )
}