import React from "react";
import notes from "/notes.jpg";

export const About: React.FC = () => {
    return (
        <section className="pb-20">
            <div className="_container">
                <h2 className="text-center mb-12 text-3xl font-semibold">About us</h2>
                <div className="flex items-center justify-between">
                    <div className="max-w-120">
                        <div className="mx-auto max-xl:text-center">
                            <h3 className="text-4xl mb-3 about-title max-sm:text-3xl">Simple Task Management!</h3>
                            <p className="max-w-160 mb-8 xl:about-text max-xl:text-center max-sm:text-sm">
                                Organize your work effortlessly. Create task groups, add individual tasks, and keep
                                everything structured in one clean workspace. Perfect for focused productivity. There
                                will also be many new features in the future.
                            </p>
                            <div className="flex max-xl:justify-center">
                                <div className="border-r-2 border-accent pr-10 max-sm:pr-5">
                                    <div>
                                        <span className="text-2xl storage_number-1 max-sm:text-xl">8</span>
                                        <span className="text-2xl max-sm:text-xl">k</span>
                                    </div>
                                    <p className="mt-1 max-sm:text-sm">Users</p>
                                </div>
                                <div className="border-r-2 border-accent px-10 max-sm:text-xl max-sm:px-5">
                                    <div>
                                        <span className="text-2xl storage_number-2">15</span>
                                        <span className="text-2xl max-sm:text-xl">+</span>
                                    </div>
                                    <p className="mt-1 max-sm:text-sm">Reviews</p>
                                </div>
                                <div className="pl-10 max-sm:pl-5">
                                    <div>
                                        <span className="text-2xl storage_number-3 max-sm:text-xl">100</span>
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
    );
};
