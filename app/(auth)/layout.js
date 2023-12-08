import { ErrorProvider } from "../components/context/ErrorContext"
import ErrorAlert from "../components/common/ErrorAlert"
import FooterSimple from "../components/common/FooterSimple"
import HeaderSimple from "../components/common/HeaderSimple"

const AuthLayout = ({ children }) => {
  return (
    <ErrorProvider>
      <div className='h-screen flex flex-col'>
        <ErrorAlert />
        <HeaderSimple />
        <main className='flex-grow px-6 pt-20'>{children}</main>
        <FooterSimple />
      </div>
    </ErrorProvider>
  )
}

export default AuthLayout
