"use client";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";

export function MainPage() {
    const words = [
        {
            text: "Write",
        },
        {
            text: "share",
        },
        {
            text: "inspire",
        },
        {
            text: "connect",
        },
        {
            text: "with Medium.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-[40rem]">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
                Your journey of words begins here
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    <Link to={"/signin"}>
                        Sign In
                    </Link>

                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
                    <Link to={"/signup"}>
                        Sign Up
                    </Link>
                </button>
            </div>
        </div>
    );
}
