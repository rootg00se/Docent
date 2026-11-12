import React from "react";
import { Button } from "@/shared/components/ui";
import { ChevronDown } from "lucide-react";

export const Home: React.FC = () => {
    return (
        <section className="w-screen h-screen text-center flex items-center justify-center flex-col">
            <h1 className="text-3xl max-w-xl mb-2 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing</h1>
            <p className="max-w-150 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maxime quibusdam alias vitae, libero
                aliquam esse molestiae invent
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
    );
};
