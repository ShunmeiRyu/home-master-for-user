import { Suspense } from "react";
import FooterSimple from "../components/common/FooterSimple";
import HeaderSimple from "../components/common/HeaderSimple";
import Loading from "./loading";

const AuthLayout = ({ children }) => {
    return (
        <div className="h-screen flex flex-col">
            <Suspense fallback={<Loading />}>
                <HeaderSimple />
                <main className="flex-grow px-6 pt-20">{children}</main>
                <FooterSimple />
            </Suspense>
        </div>
    );
};

export default AuthLayout;