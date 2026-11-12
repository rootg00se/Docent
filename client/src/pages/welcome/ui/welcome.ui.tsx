import React from "react";
import { Header } from "./header";
import { About } from "./about";
import { Features } from "./features";
import { Footer } from "./footer";
import { Home } from "./home";

export const WelcomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <Home />
                <About />
                <Features />
                <Footer />
            </main>
        </div>
    );
};
