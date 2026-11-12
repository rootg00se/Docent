import React from "react";
import { Download } from "lucide-react";
import { Header } from "@/widgets/header";
import { CurrentClass } from "@/widgets/current-class";
import { NextClass } from "@/widgets/next-class";
import { ClassList } from "@/widgets/class-list";

export const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="py-8 pb-15">
                <div className="_container">
                    <div className="flex justify-between items-end mb-5">
                        <div>
                            <p className="text-xs mb-1">Сегодня</p>
                            <p className="text-3xl mb-2 font-medium">Вторник, 10 ноября</p>
                            <p className="text-sm">2026 - сегодня 5 пар</p>
                        </div>
                        <div className="inline-flex items-center gap-3 border rounded-md p-2">
                            <Download size={20} />
                            <p className="text-sm">Загрузить расписание</p>
                        </div>
                    </div>
                    <div className="flex items-stretch gap-7 mb-5">
                        <CurrentClass />
                        <NextClass />
                    </div>
                    <ClassList />
                </div>
            </div>
        </div>
    );
};
