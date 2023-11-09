"use client"
import VisibilityIcon from '@mui/icons-material/Visibility';
import clsx from 'clsx';
import { useState } from 'react';

export default function PwdInput() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const iconClassName = clsx({
        "text-gun-powder-60": !isPasswordVisible,
        "text-sunglow-100": isPasswordVisible
    });

    return (
        <div>
            <label for="password" class="block mb-3 text-base font-sans font-semibold tracking-tight leading-tight">パスワード</label>
            <div class="relative">
                <input
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    class="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight font-sans text-sm font-normal h-10"
                    placeholder="パスワードを入力"
                />
                <div onClick={togglePasswordVisibility} class="absolute inset-y-0 right-0 flex items-center pr-3">
                    <VisibilityIcon className={iconClassName} sx={{ fontSize: 20 }} />
                </div>
            </div>
        </div>

    )
}