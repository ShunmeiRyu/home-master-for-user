import Link from "next/link";
import EmailInput from "../../components/common/EmailInput";
import PwdInput from "../../components/common/PwdInput";

export default function Login() {
    return (
        <div className="flex flex-col">
            <p className="mb-5 tracking-wider font-bold text-xl">ログイン</p>
            <EmailInput />
            <PwdInput first={true} />
            <Link href="/login/forgetPwd" className="font-sans text-xs font-normal mt-3 underline ml-auto">パスワードを忘れた場合</Link>
            <Link href="/login/register" className="font-sans text-xs font-normal mt-3 underline self-center">新規会員登録</Link>
        </div>
    )
}