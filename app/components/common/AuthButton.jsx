"use client"
import { useState } from "react";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function AuthButton(props) {
  const { btnText, href, api, data } = props;

  const path = "/login" + href;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLinkClick = () => {
    console.log("data:",data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      api(data);
      router.push(path);
    }, 0);
  };

  const buttonClassName = clsx({
    "bg-shark-40 text-center h-12 w-full rounded-2xl text-base font-bold font-Inter leading-6 py-3 my-10": loading,
    "bg-sunglow-100 text-center h-12 w-full rounded-2xl text-base font-bold font-Inter leading-6 py-3 my-10": !loading
  });

  return (
    <div>
      <button
        className={buttonClassName}
        onClick={handleLinkClick}>
        {loading ? <AutorenewIcon className="text-sunglow-100 animate-spin" /> : btnText}
      </button>
    </div>
  )
}
