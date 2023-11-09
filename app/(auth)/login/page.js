import Link from "next/link";
import EmailInput from "../../components/common/EmailInput";
import PwdInput from "../../components/common/PwdInput";

export default function Login() {
    return (
        <div>
            <p class="mb-5 tracking-wider font-bold text-xl">ログイン</p>
            <EmailInput />
            <PwdInput />
            <Link href="/forgetPwd">パスワードを忘れた場合</Link>
        </div>
    )
}