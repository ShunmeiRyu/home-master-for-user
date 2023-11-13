"use client"
import VisibilityIcon from '@mui/icons-material/Visibility';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function PwdInput(props) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [safe, setSafe] = useState("")
    const isFirst = props.first;
    const isCheck = props.check;

    const checkPasswordStrength = (newPwd) => {
        setPassword(newPwd)
        const lengthRule = password.length >= 8;
        const specialCharRule = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const lowercaseRule = /[a-z]/.test(password);
        const uppercaseRule = /[A-Z]/.test(password);

        if (lengthRule && specialCharRule && lowercaseRule && uppercaseRule) {
            setSafe("Strong")
        } else if (lengthRule && ((lowercaseRule && uppercaseRule) || specialCharRule)) {
            setSafe("Moderate")
        } else {
            setSafe("Weak")
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const iconClassName = clsx({
        "text-gun-powder-60": !isPasswordVisible,
        "text-sunglow-100": isPasswordVisible
    });

    return (
        <div className="mt-4">
            <label htmlFor="password" className="block mb-2 text-base font-sans font-semibold tracking-tight leading-tight">{isFirst ? "パスワード" : "パスワード(再入力)"}</label>
            <div className="relative">
                <input
                    id={isFirst ? "password" : "checkPassword"}
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => checkPasswordStrength(e.target.value)}
                    className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight font-sans text-sm font-normal h-10"
                    placeholder="パスワードを入力"
                />
                <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <VisibilityIcon className={iconClassName} sx={{ fontSize: 20 }} />
                </div>
            </div>
           

            {isCheck ?
                <div className="flex items-center h-4 mt-2">
                    <HorizontalRuleIcon fontSize="large" color={safe === "Weak" || safe === "Moderate" || safe === "Strong" ? "success" : "disabled"} />
                    <HorizontalRuleIcon fontSize="large" color={safe === "Moderate" || safe === "Strong" ? "success" : "disabled"} />
                    <HorizontalRuleIcon fontSize="large" color={safe === "Strong" ? "success" : "disabled"} />
                    <p className="text-xs ml-1">{safe}</p>
                </div> : null}
        </div>

    )
}