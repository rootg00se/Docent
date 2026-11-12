import React from "react";
import logo from "/logo.png";
import { UserRound } from "lucide-react";

export const Header: React.FC = () => {
    return (
        <header className="bg-background w-full border-b py-4">
            <div className="_container flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="max-w-6">
                        <img className="w-full" src={logo} alt="Logo" />
                    </div>
                    <div className="text-xl leading-6 font-semibold">Доцент</div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-9 h-9 border rounded-full flex items-center justify-center">
                        <UserRound />
                    </div>
                    <p>Профиль</p>
                </div>
            </div>
        </header>
    );
};
