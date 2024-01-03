import React, { useState } from "react";
import "./Login.css";
import PageLoader from "pages/PageLoader";
import SideContent from "module/AuthModule/SideContent";
import { LoginForm } from "Forms/LoginForm";
import {useGetUserLoginQuery} from "state/api"
const Login = () => {
    const [login, setLogin] = useState("");
    const handleLoginChange = (value) => {
        setLogin(value);
    };
    const { data, isLoading } = useGetUserLoginQuery({ login });
    if (data && data.success) {
    } else {
        console.log("data");
    }

    return (
        <>
            <div className="parent_clearfix">
                <SideContent />
                <div className="login">
                    <div className="container">
                        <div className="login-form">
                            <LoginForm handleLoginChange={handleLoginChange} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;