import FooterSimple from "../components/common/FooterSimple";
import HeaderSimple from "../components/common/HeaderSimple";

const AuthLayout = ({ children }) => {
    return (
        <div className="h-screen flex flex-col">
            <HeaderSimple />
            <main className="flex-grow px-6 pt-20">{children}</main>
            <FooterSimple />
        </div>
    );
};

export default AuthLayout;