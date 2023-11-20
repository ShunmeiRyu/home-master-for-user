import Link from "next/link";
import PwdInput from "../../../../components/common/PwdInput";
import VerifyCode from "../../../../components/common/VerifyCode";
import AuthButton from "../../../../components/common/AuthButton";

export default function ResetPwd() {
    return (
        <div className="flex flex-col">
            <p className="mb-5 tracking-wider font-bold text-xl">パスワード新規</p>
            <p className="font-sans text-xs font-normal mb-5">6桁の確認コードをdemo@gotask.co.jp宛にメールしましたので、下のボックスにコードを入力してメールを確認してください。</p>
            <VerifyCode />
            <PwdInput first={true} check={true} />
            <PwdInput first={false} />
            <AuthButton btnText="新規" href=""/>
            <Link href="/login" className="font-sans text-xs font-normal mt-3 underline self-center">すでに会員の方はログイン</Link>
        </div>
    )
}