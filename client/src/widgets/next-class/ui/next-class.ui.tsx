import React from "react";

export const NextClass: React.FC = () => {
    return (
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
    );
};
