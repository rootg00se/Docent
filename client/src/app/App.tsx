import { HomePage } from "@/pages/home";
import { SignInPage } from "@/pages/sign-in";
import { WelcomePage } from "@/pages/welcome";
import type React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="wrap">
            <Routes>
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<WelcomePage />} />
            </Routes>
        </div>
    );
};

export default App;
