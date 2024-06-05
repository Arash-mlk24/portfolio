import React from 'react';
import HeroComponent from "@/components/Hero/HeroComponent";

const HomeUi = ({ }: HomePageProps): JSX.Element => {
    return (
        <main className="flex min-h-screen flex-col bg-[#171717]">
            <div className="container mx-auto px-12 py-4">
                <HeroComponent />
            </div>
        </main>
    )
}

export interface HomePageProps { }

export default HomeUi;
