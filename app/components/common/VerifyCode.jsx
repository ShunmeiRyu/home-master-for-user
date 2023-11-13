"use client"
import React, { useRef, useState } from "react"

export default function VerifyCode() {

    const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
    const [checkNum, setCheckNum] = useState(null);
    const inputRefs = useRef([...Array(6)].map(() => React.createRef()));

    const handleKeyPress = (index, e) => {

        const inputKey = e.key;

        if (/^\d$/.test(inputKey)) {
            setCheckNum(null);
        } else {
            setCheckNum(index);
            e.preventDefault();
        }
    }

    const handleInputChange = (index, value) => {
        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        if (value !== "" && index < 5) {
            inputRefs.current[index + 1].current.focus();
        } else if (value === "" && index > 0) {
            inputRefs.current[index - 1].current.focus();
        }
    };

    return (
        <div>
            <label htmlFor="verifyCode" className="block mb-2 text-base font-sans font-semibold tracking-tight leading-tight">検証コード</label>
            <div className="flex flex-row items-center justify-between">
                {
                    verificationCode.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            ref={inputRefs.current[index]}
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            onKeyPress={(e) => handleKeyPress(index, e)}
                            className={
                                "appearance-none text-center border rounded-xl w-10 text-gray-700 leading-tight font-sans text-sm font-normal h-10 focus:outline-none "
                                + (checkNum === index ? "focus:border-error-500 focus:border-2 animate-input-error" : "")
                            }
                            placeholder="-" />
                    ))
                }
            </div>
        </div>
    )
}