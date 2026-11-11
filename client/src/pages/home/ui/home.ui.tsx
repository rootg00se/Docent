import React from "react";
import logo from "/logo.png";
import { Check, Clock, UserRound } from "lucide-react";
import { Progress, ProgressLabel } from "@/shared/components/ui";

export const HomePage: React.FC = () => {
    return (
        <div>
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
            <div className="py-8 pb-15">
                <div className="_container">
                    <div className="flex justify-between items-end mb-5">
                        <div>
                            <p className="text-xs mb-1">Сегодня</p>
                            <p className="text-3xl mb-2 font-medium">Вторник, 10 ноября</p>
                            <p className="text-sm">2026 - сегодня 5 пар</p>
                        </div>
                        <div className="inline-flex items-center gap-3 border rounded-md p-2">
                            <Clock size={20} />
                            <p className="text-sm">Сейчас 10:20</p>
                        </div>
                    </div>
                    <div className="flex items-stretch gap-7 mb-5">
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
                        <div className="bg-white p-5 rounded-md border w-full">
                            <p className="text-xs mb-2">Следующая пара</p>
                            <p className="text-2xl max-w-120 mb-1">Проектирование программного обеспечения</p>
                            <p className="text-sm mb-4">Тема: проектирование по</p>
                            <div className="mb-5">
                                <div className="py-2.5 border-t flex justify-between">
                                    <span className="text-sm text-muted-foreground">Время</span>
                                    <span className="text-sm">17:00 - 18:30</span>
                                </div>
                                <div className="py-2 border-t flex justify-between">
                                    <span className="text-sm text-muted-foreground">Время</span>
                                    <span className="text-sm">17:00 - 18:30</span>
                                </div>
                                <div className="py-2 border-t flex justify-between">
                                    <span className="text-sm text-muted-foreground">Время</span>
                                    <span className="text-sm">17:00 - 18:30</span>
                                </div>
                            </div>
                            <div className="text-sm">Начнется через 28 минут</div>
                        </div>
                    </div>
                    <div className="bg-white pt-5 rounded-md border">
                        <p className="font-medium px-5 pb-5">Расписание на день</p>
                        <div>
                            <div className="flex px-5 border-t py-5 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="border w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        1
                                    </div>
                                    <p className="text-sm">08:30 - 10:00</p>
                                </div>
                                <div>
                                    <p>Системное программирование</p>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati.
                                    </p>
                                </div>
                                <p className="text-sm">0907-41</p>
                                <p className="text-sm">Каб. 204</p>
                                <div className="flex items-center gap-1 p-1 rounded-md border">
                                    <Check size={15} />
                                    <span className="text-xs">Завершено</span>
                                </div>
                            </div>
                            <div className="flex px-5 border-t py-5 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="border w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        1
                                    </div>
                                    <p className="text-sm">08:30 - 10:00</p>
                                </div>
                                <div>
                                    <p>Системное программирование</p>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati.
                                    </p>
                                </div>
                                <p className="text-sm">0907-41</p>
                                <p className="text-sm">Каб. 204</p>
                                <div className="flex items-center gap-1 p-1 rounded-md border">
                                    <Check size={15} />
                                    <span className="text-xs">Завершено</span>
                                </div>
                            </div>
                            <div className="flex px-5 border-t py-5 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="border w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        1
                                    </div>
                                    <p className="text-sm">08:30 - 10:00</p>
                                </div>
                                <div>
                                    <p>Системное программирование</p>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati.
                                    </p>
                                </div>
                                <p className="text-sm">0907-41</p>
                                <p className="text-sm">Каб. 204</p>
                                <div className="flex items-center gap-1 p-1 rounded-md border">
                                    <Check size={15} />
                                    <span className="text-xs">Завершено</span>
                                </div>
                            </div>
                            <div className="flex px-5 border-t py-5 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="border w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        1
                                    </div>
                                    <p className="text-sm">08:30 - 10:00</p>
                                </div>
                                <div>
                                    <p>Системное программирование</p>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati.
                                    </p>
                                </div>
                                <p className="text-sm">0907-41</p>
                                <p className="text-sm">Каб. 204</p>
                                <div className="flex items-center gap-1 p-1 rounded-md border">
                                    <Check size={15} />
                                    <span className="text-xs">Завершено</span>
                                </div>
                            </div>
                            <div className="flex px-5 border-t py-5 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="border w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        1
                                    </div>
                                    <p className="text-sm">08:30 - 10:00</p>
                                </div>
                                <div>
                                    <p>Системное программирование</p>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati.
                                    </p>
                                </div>
                                <p className="text-sm">0907-41</p>
                                <p className="text-sm">Каб. 204</p>
                                <div className="flex items-center gap-1 p-1 rounded-md border">
                                    <Check size={15} />
                                    <span className="text-xs">Завершено</span>
                                </div>
                            </div>
                            <div className="flex px-5 border-t py-5 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="border w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        1
                                    </div>
                                    <p className="text-sm">08:30 - 10:00</p>
                                </div>
                                <div>
                                    <p>Системное программирование</p>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati.
                                    </p>
                                </div>
                                <p className="text-sm">0907-41</p>
                                <p className="text-sm">Каб. 204</p>
                                <div className="flex items-center gap-1 p-1 rounded-md border">
                                    <Check size={15} />
                                    <span className="text-xs">Завершено</span>
                                </div>
                            </div>
                            <div className="flex px-5 border-t py-5 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="border w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        1
                                    </div>
                                    <p className="text-sm">08:30 - 10:00</p>
                                </div>
                                <div>
                                    <p>Системное программирование</p>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati.
                                    </p>
                                </div>
                                <p className="text-sm">0907-41</p>
                                <p className="text-sm">Каб. 204</p>
                                <div className="flex items-center gap-1 p-1 rounded-md border">
                                    <Check size={15} />
                                    <span className="text-xs">Завершено</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
