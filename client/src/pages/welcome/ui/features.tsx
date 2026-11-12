import React from "react";
import todo from "/todo.gif";
import { Link } from "react-router-dom";
import stars from "/stars.gif";
import lamp from "/lamp.gif";

export const Features: React.FC = () => {
    return (
        <section className="py-20 features" id="features">
            <div className="_container">
                <h2 className="text-center mb-12 text-3xl font-semibold">Features</h2>
                <div className="flex justify-between items-stretch gap-20 flex-wrap">
                    <div className="item-1 flex flex-col justify-between mx-auto">
                        <div className="mb-4 max-w-75">
                            <img src={todo} className="w-full" alt="" />
                        </div>
                        <span className="text-2xl font-bold">Task Groups</span>
                        <p className="mb-4 mt-5 max-w-80">
                            Bundle realted tasks together. Whether it's for projects, daily routines, or personal goals
                            – keep everything contained in clear collections.
                        </p>
                        <Link
                            to={"/home"}
                            className="text-sm text-center p-2 rounded-sm border transition duration-300 cursor-pointer"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="item-2 flex flex-col justify-between mx-auto">
                        <div className="mb-4 max-w-75">
                            <img src={lamp} className="w-full" alt="" />
                        </div>
                        <span className="text-2xl font-bold">Different types of tasks</span>
                        <p className="mb-4 mt-5 max-w-80">
                            Create different types of tasks, from simple tasks to quotes, thoughts, or full-fledged
                            tasks.
                        </p>
                        <Link
                            to={"/home"}
                            className="text-sm text-center p-2 rounded-sm border transition duration-300 cursor-pointer"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="item-3 flex flex-col justify-between mx-auto">
                        <div className="mb-4 max-w-75">
                            <img src={stars} className="w-full" alt="" />
                        </div>
                        <span className="text-2xl font-bold">Decor</span>
                        <p className="mb-4 mt-5 max-w-80">
                            Make your task groups more colorful by using different emojis or background images
                        </p>
                        <Link
                            to={"/home"}
                            className="text-sm text-center p-2 rounded-sm border transition duration-300 cursor-pointer"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
