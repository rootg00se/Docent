import React from "react";
import { Progress, ProgressLabel } from "@/shared/components/ui";

export const CurrentClass: React.FC = () => {
    return (
        <div className="bg-white p-5 rounded-md border max-w-150">
            <p className="text-xs mb-2">Текущая пара - 5 пара</p>
            <p className="text-2xl max-w-120 mb-1">Проектирование программного обеспечения</p>
            <p className="text-sm mb-4">Тема: проектирование</p>
            <div className="flex items-center gap-5 mb-5">
                <div className="bg-muted w-32 rounded-md p-2">
                    <p className="text-xs mb-1 text-muted-foreground">Группа</p>
                    <p className="text-sm">0907-41</p>
                </div>
                <div className="bg-muted w-32 rounded-md p-2">
                    <p className="text-xs mb-1 text-muted-foreground">Кабинет</p>
                    <p className="text-sm">218</p>
                </div>
                <div className="bg-muted w-32 rounded-md p-2">
                    <p className="text-xs mb-1 text-muted-foreground">Начало окончание</p>
                    <p className="text-sm">15:30-17:00</p>
                </div>
            </div>
            <Progress value={56} className="w-full max-w-sm">
                <ProgressLabel>Прошло 40 минут</ProgressLabel>
                <div className="text-xs font-medium ml-auto mt-1">Остался 1 час</div>
            </Progress>
        </div>
    );
};
