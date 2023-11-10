import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div>HOME</div>
      <Link href='/login'>LOGIN</Link>
      <span> </span>
      <Link href='/login/register'>REGISTER</Link>
    </div>
  )
}
