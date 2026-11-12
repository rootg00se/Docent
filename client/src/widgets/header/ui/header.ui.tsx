import React from "react";
import logo from "/logo.png";
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="bg-background w-full border-b py-4">
            <div className="_container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="max-w-6">
                        <img className="w-full" src={logo} alt="Logo" />
                    </div>
                    <div className="text-xl leading-6 font-semibold">Доцент</div>
                </Link>
                <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
                    <div className="w-9 h-9 border rounded-full flex items-center justify-center">
                        <UserRound />
                    </div>
                    <p>Профиль</p>
                </Link>
            </div>
        </header>
    );
};
