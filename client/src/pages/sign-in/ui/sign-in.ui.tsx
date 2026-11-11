import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card";
import { Button, Input, Label } from "@/shared/components/ui";
import authBackground from "/auth-background.jpg";

export const SignInPage: React.FC = () => {
    return (
        <div className="flex items-center w-screen h-screen justify-center overflow-hidden">
            <div className="w-[50vw]">
                <img className="w-full h-full" src={authBackground} alt="" />
            </div>
            <div className="w-[50vw] flex items-center justify-center">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Войдите в свой аккаунт</CardTitle>
                        <CardDescription>
                            Введите логин и пароль своей учетной записи для входа
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Пароль</Label>
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Войти
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
