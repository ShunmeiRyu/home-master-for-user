import FooterSimple from "../components/common/FooterSimple";
import HeaderSimple from "../components/common/HeaderSimple";

const AuthLayout = ({ children }) => {
    return (
        <div class="h-screen flex flex-col">
            <HeaderSimple />
            <main class="flex-grow px-6 pt-20">{children}</main>
            <FooterSimple />
        </div>
    );
};

export default AuthLayout;