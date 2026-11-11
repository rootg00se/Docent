import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { Button } from "@/shared/components/ui";
import { ChevronDown } from "lucide-react";
import notes from "/notes.jpg";
import todo from "/todo.gif";
import stars from "/stars.gif";
import lamp from "/lamp.gif";

export const WelcomePage: React.FC = () => {
    return (
        <div>
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
                                    <Link
                                        to="/"
                                        className="text-muted-foreground group-hover:text-sidebar-primary"
                                    >
                                        Home
                                    </Link>
                                    <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                                </li>
                                <div className="text-secondary">/</div>
                                <li className="group relative transition-all duration-300">
                                    <Link
                                        to="/"
                                        className="text-muted-foreground group-hover:text-sidebar-primary"
                                    >
                                        About
                                    </Link>
                                    <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                                </li>
                                <div className="text-secondary">/</div>
                                <li className="group relative transition-all duration-300">
                                    <Link
                                        to="/"
                                        className="text-muted-foreground group-hover:text-sidebar-primary"
                                    >
                                        Pricing
                                    </Link>
                                    <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                                </li>
                                <div className="text-secondary">/</div>
                                <li className="group relative transition-all duration-300">
                                    <Link
                                        to="/"
                                        className="text-muted-foreground group-hover:text-sidebar-primary"
                                    >
                                        Team
                                    </Link>
                                    <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                                </li>
                                <div className="text-secondary">/</div>
                                <li className="group relative transition-all duration-300">
                                    <Link
                                        to="/"
                                        className="text-muted-foreground group-hover:text-sidebar-primary"
                                    >
                                        Customers
                                    </Link>
                                    <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                                </li>
                                <div className="text-secondary">/</div>
                                <li className="group relative transition-all duration-300">
                                    <Link
                                        to="/"
                                        className="text-muted-foreground group-hover:text-sidebar-primary"
                                    >
                                        Contact
                                    </Link>
                                    <div className="bg-sidebar-primary h-0.5 w-0 transition-all group-hover:w-full"></div>
                                </li>
                            </ul>
                        </nav>
                        <div className="text-secondary">|</div>
                        <div className="flex items-center gap-5">
                            <Link to="" className="text-muted-foreground text-sm">
                                Логин
                            </Link>
                            <Button size="lg" className="text-sm">
                                Регистрация
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="w-screen h-screen text-center flex items-center justify-center flex-col">
                    <h1 className="text-3xl max-w-xl mb-2 font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                    </h1>
                    <p className="max-w-150 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maxime
                        quibusdam alias vitae, libero aliquam esse molestiae invent
                    </p>
                    <div className="flex items-center gap-5 mb-10">
                        <Button variant="outline" size="lg" className="text-sm w-30 h-9">
                            Логин
                        </Button>
                        <Button size="lg" className="text-sm w-30 h-9">
                            Регистрация
                        </Button>
                    </div>
                    <div className="flex cursor-pointer items-center justify-center w-10 h-10 border rounded-full">
                        <ChevronDown />
                    </div>
                </section>
                <section className="pb-20">
                    <div className="_container">
                        <h2 className="text-center mb-12 text-3xl font-semibold">About us</h2>
                        <div className="flex items-center justify-between">
                            <div className="max-w-120">
                                <div className="mx-auto max-xl:text-center">
                                    <h3 className="text-4xl mb-3 about-title max-sm:text-3xl">
                                        Simple Task Management!
                                    </h3>
                                    <p className="max-w-160 mb-8 xl:about-text max-xl:text-center max-sm:text-sm">
                                        Organize your work effortlessly. Create task groups, add
                                        individual tasks, and keep everything structured in one
                                        clean workspace. Perfect for focused productivity. There
                                        will also be many new features in the future.
                                    </p>
                                    <div className="flex max-xl:justify-center">
                                        <div className="border-r-2 border-accent pr-10 max-sm:pr-5">
                                            <div>
                                                <span className="text-2xl storage_number-1 max-sm:text-xl">
                                                    8
                                                </span>
                                                <span className="text-2xl max-sm:text-xl">k</span>
                                            </div>
                                            <p className="mt-1 max-sm:text-sm">Users</p>
                                        </div>
                                        <div className="border-r-2 border-accent px-10 max-sm:text-xl max-sm:px-5">
                                            <div>
                                                <span className="text-2xl storage_number-2">
                                                    15
                                                </span>
                                                <span className="text-2xl max-sm:text-xl">+</span>
                                            </div>
                                            <p className="mt-1 max-sm:text-sm">Reviews</p>
                                        </div>
                                        <div className="pl-10 max-sm:pl-5">
                                            <div>
                                                <span className="text-2xl storage_number-3 max-sm:text-xl">
                                                    100
                                                </span>
                                                <span className="text-2xl max-sm:text-xl">%</span>
                                            </div>
                                            <p className="mt-1 max-sm:text-sm">Free to use</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-100">
                                <img className="w-full border rounded-md" src={notes} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 features" id='features'>
                    <div className="_container">
                        <h2 className='text-center mb-12 text-3xl font-semibold'>Features</h2>
                        <div className="flex justify-between items-stretch gap-20 flex-wrap">
                            <div className="item-1 flex flex-col justify-between mx-auto">
                                <div className="mb-4 max-w-75">
                                    <img src={todo} className="w-full" alt="" />
                                </div>
                                <span className='text-2xl font-bold'>Task Groups</span>
                                <p className="mb-4 mt-5 max-w-80">
                                    Bundle realted tasks together. Whether it's for projects, daily routines, or personal goals
                                    – keep everything contained in clear collections.
                                </p>
                                <Link to={"/home"} className='text-sm text-center p-2 rounded-sm border transition duration-300 cursor-pointer'>Get started</Link>
                            </div>
                            <div className="item-2 flex flex-col justify-between mx-auto">
                                <div className="mb-4 max-w-75">
                                    <img src={lamp} className="w-full" alt="" />
                                </div>
                                <span className='text-2xl font-bold'>Different types of tasks</span>
                                <p className="mb-4 mt-5 max-w-80">
                                    Create different types of tasks, from simple tasks to quotes, thoughts, or full-fledged tasks.
                                </p>
                                <Link to={"/home"} className='text-sm text-center p-2 rounded-sm border transition duration-300 cursor-pointer'>Get started</Link>
                            </div>
                            <div className="item-3 flex flex-col justify-between mx-auto">
                                <div className="mb-4 max-w-75">
                                    <img src={stars} className="w-full" alt="" />
                                </div>
                                <span className='text-2xl font-bold'>Decor</span>
                                <p className="mb-4 mt-5 max-w-80">
                                    Make your task groups more colorful by using different emojis or background images
                                </p>
                                <Link to={"/home"} className='text-sm text-center p-2 rounded-sm border transition duration-300 cursor-pointer'>Get started</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer border-t-2 border-accent py-15">
                    <div className="_container flex justify-between gap-10 flex-wrap max-sm:flex-col max-sm:text-center">
                        <div className="mx-auto max-sm:text-center">
                            <div className="flex items-center gap-1">
                                <img className='w-5 h-5' src={logo} alt="" />
                                <div className="text-xl italic font-bold">Доцент</div>
                            </div>
                            <p className='text-sm text-[#797979] italic'>Всегда с вами</p>
                        </div>
                        <ul className='flex flex-col gap-2 mx-auto'>
                            <li><a href="#home" className='hover:underline'>Home</a></li>
                            <li><a href="#about" className='hover:underline'>About us</a></li>
                            <li><a href="#features" className='hover:underline'>Features</a></li>
                        </ul>
                        <ul className='flex flex-col gap-2 mx-auto'>
                            <li><a href="https://youtu.be/80gZzF0E-c4?si=UnrB05v6xwqQ285F" className='hover:underline'>Policy & Privacy</a></li>
                            <li><a href="" className='hover:underline'>Terms & Conditions</a></li>
                            <li><a href="https://youtu.be/dQw4w9WgXcQ?si=nIMEBr06_4jQpOCm" className='hover:underline'>Stupid Video</a></li>
                        </ul>
                        <p className="mx-auto">@Copyright 2025</p>
                    </div>
                </footer>
            </main>
        </div>
    );
};
