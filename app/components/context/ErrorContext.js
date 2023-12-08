"use client"
import React, { createContext, useContext, useState } from "react"

export const ErrorContext = createContext()

export const ErrorProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const showError = (message) => {
    setIsVisible(true)
    setErrorMsg(message)
  }

  const hideError = () => {
    setIsVisible(false)
  }

  return (
    <ErrorContext.Provider
      value={{ isVisible, errorMsg, showError, hideError }}
    >
      {children}
    </ErrorContext.Provider>
  )
}
export const useError = () => useContext(ErrorContext)
