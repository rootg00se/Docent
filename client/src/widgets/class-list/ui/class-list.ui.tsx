import { Check } from "lucide-react";
import React from "react";

export const ClassList: React.FC = () => {
    return (
        <div className="bg-white pt-5 rounded-md border">
            <p className="font-medium px-5 pb-5">Расписание на день</p>
            <div>
                {[1, 2, 3, 4, 5, 6].map(() => (
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
                ))}
            </div>
        </div>
    );
};
