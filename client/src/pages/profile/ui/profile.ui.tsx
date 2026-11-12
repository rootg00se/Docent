import { Header } from "@/widgets/header";
import React from "react";

export const ProfilePage: React.FC = () => {
    return (
        <div>
            <Header />
            <section className="pt-8 pb-15">
                <p className="px-5 mb-5 font-medium text-xl">Численные методы - Группа 0907-41</p>
                <div className="flex items-start">
                    <div className="mx-5 border inline-block rounded-sm">
                        <div className="flex bg-sidebar">
                            <div className="w-10 flex text-sm flex-col justify-center px-2 py-1 border-r">№</div>
                            <div className="w-80 text-sm px-2 flex flex-col justify-center py-1 border-r">
                                ФИО Студента
                            </div>
                            {Array.from({ length: 14 }).map(() => (
                                <div className="w-10 text-sm px-2 py-1 border-l [writing-mode:vertical-rl] rotate-180">
                                    01.02.2026
                                </div>
                            ))}
                        </div>
                        <div>
                            {Array.from({ length: 15 }).map(() => (
                                <div className="border-t flex">
                                    <div className="w-10 flex text-sm flex-col justify-center px-2 py-2 border-r">
                                        1
                                    </div>
                                    <div className="w-80 text-sm px-2 flex flex-col justify-center py-2 border-r">
                                        Олег Сиряпкин Бодягович
                                    </div>
                                    {Array.from({ length: 14 }).map(() => (
                                        <div className="w-10 text-sm px-2 py-1 border-r">5</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mx-5 border inline-block rounded-sm">
                        <div className="flex bg-sidebar">
                            <div className="w-40 text-sm px-2 flex flex-col justify-center py-2 border-r">
                                Дата проведения занятия
                            </div>
                            <div className="w-120 text-sm px-2 flex flex-col justify-center py-2 border-r">
                                Кратко содержание занятия
                            </div>
                        </div>
                        <div>
                            {Array.from({ length: 10 }).map(() => (
                                <div className="border-t flex">
                                    <div className="w-40 flex text-sm flex-col justify-center px-2 py-2 border-r">
                                        04.10.2026
                                    </div>
                                    <div className="w-120 text-sm px-2 flex flex-col justify-center py-2 border-r">
                                        Обучение людей решать задачи по численынм методам
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
