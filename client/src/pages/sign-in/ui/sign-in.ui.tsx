import React from "react";
import authBackground from "/auth-background.jpg";
import { SignUpForm } from "@/widgets/sign-up-form";

export const SignInPage: React.FC = () => {
    return (
        <div className="flex items-center w-screen h-screen justify-center overflow-hidden">
            <div className="w-[50vw]">
                <img className="w-full h-full" src={authBackground} alt="" />
            </div>
            <div className="w-[50vw] flex items-center justify-center">
                <SignUpForm />
            </div>
        </div>
    );
};
