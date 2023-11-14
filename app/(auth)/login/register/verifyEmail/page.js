import Link from "next/link";
import VerifyCode from "../../../../components/common/VerifyCode";

export default function VerifyEmail() {
    return (
        <div className="flex flex-col">
            <p className="mb-5 tracking-wider font-bold text-xl">メール検証</p>
            <p className="font-sans text-xs font-normal mb-5">6桁の確認コードをdemo@gotask.co.jp宛にメールしましたので、下のボックスにコードを入力してメールを確認してください。</p>
            <VerifyCode />
            <p className="font-sans text-xs font-normal mb-5 self-center mt-10">コードをお持ちでない場合は、<Link href="/login" className="underline">コード再送信</Link></p>
            <Link href="/login" className="font-sans text-xs font-normal mt-3 underline self-center">すでに会員の方はログイン</Link>
        </div>
    )
}