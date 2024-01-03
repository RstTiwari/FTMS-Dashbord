import { lazy, Suspense } from "react";
import PageLoader from "pages/PageLoader";
import AuthRouter from "./AuthRouter";
import Approuter from "./Approuter";
import { useAuth } from "../state/AuthProvider";

const DefaultApp = () => {
    <Suspense fallback={PageLoader}>
        <Approuter />
    </Suspense>;
};
export default function Myfac8ry() {
    const { isLoggedIn, login, logout } = useAuth();
    if (!isLoggedIn) {
        return <AuthRouter />;
    } else {
        <DefaultApp />;
    }
}
