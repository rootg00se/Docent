import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { Button } from "@/shared/components/ui";

export const Header: React.FC = () => {
    return (
        <header className="fixed bg-background w-full border-b  py-5">
            <div className="_container flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="max-w-6">
                        <img className="w-full" src={logo} alt="Logo" />
                    </div>
                    <div className="text-xl leading-6 font-semibold">Доцент</div>
                </div>
                <div className="flex items-center gap-4">
                    <nav>
                        <ul className="flex items-center gap-2 text-sm">
                            <li className="group relative transition-all duration-300">
                                <Link to="/" className="text-muted-foreground group-hover:text-sidebar-primary">
                                    Home
                                </Link>
                                <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                            </li>
                            <div className="text-secondary">/</div>
                            <li className="group relative transition-all duration-300">
                                <Link to="/" className="text-muted-foreground group-hover:text-sidebar-primary">
                                    About
                                </Link>
                                <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                            </li>
                            <div className="text-secondary">/</div>
                            <li className="group relative transition-all duration-300">
                                <Link to="/" className="text-muted-foreground group-hover:text-sidebar-primary">
                                    Pricing
                                </Link>
                                <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                            </li>
                            <div className="text-secondary">/</div>
                            <li className="group relative transition-all duration-300">
                                <Link to="/" className="text-muted-foreground group-hover:text-sidebar-primary">
                                    Team
                                </Link>
                                <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                            </li>
                            <div className="text-secondary">/</div>
                            <li className="group relative transition-all duration-300">
                                <Link to="/" className="text-muted-foreground group-hover:text-sidebar-primary">
                                    Customers
                                </Link>
                                <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                            </li>
                            <div className="text-secondary">/</div>
                            <li className="group relative transition-all duration-300">
                                <Link to="/" className="text-muted-foreground group-hover:text-sidebar-primary">
                                    Contact
                                </Link>
                                <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-secondary">|</div>
                    <div className="flex items-center gap-5">
                        <Link to="/sign-in" className="text-muted-foreground text-sm">
                            Логин
                        </Link>
                        <Button size="lg" className="text-sm">
                            <Link to="/sign-in">Регистрация</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
