import { Button } from "../components/button";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import { ArrowRight, Edit3, Share2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { GitHubIcon, LinkDinIcon, TwitterIcon } from "../components/Icons";
import { RevealButtons } from "../components/RevealButton";

export default function MainPage() {
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

    const features = [
        {
            icon: <Edit3 className="h-6 w-6" />,
            title: "Write Your Story",
            description: "Share your ideas, experiences, and expertise with the world.",
        },
        {
            icon: <Share2 className="h-6 w-6" />,
            title: "Reach Millions",
            description: "Connect with readers from around the globe who share your interests.",
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Join the Community",
            description: "Engage with other writers and readers in meaningful discussions.",
        },
    ];

    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-6 py-24 bg-muted-foreground text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">Your journey of words begins here</h1>
                <TypewriterEffectSmooth words={words} className="text-2xl sm:text-3xl" />
                <div className="flex flex-col sm:flex-row gap-6 mt-10">
                    <Button asChild className="w-44 h-12 rounded-xl bg-black text-white text-sm transition hover:opacity-90">
                        <Link to="/signin">Login</Link>
                    </Button>
                    <Button asChild className="w-44 h-12 rounded-xl bg-white text-black border border-black text-sm transition hover:bg-gray-100">
                        <Link to="/signup">Register</Link>
                    </Button>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-12">Why Choose Medium?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-8 rounded-lg bg-white dark:bg-background shadow-md border border-gray-200 transition hover:shadow-lg"
                            >
                                <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Writing?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                        Join millions of writers and readers who are already sharing their stories on Medium. Start your writing
                        journey today.
                    </p>
                    <Button asChild className="group w-48 h-12 rounded-lg bg-black text-white text-lg font-medium">
                        <Link to="/signup">
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-12 bg-muted/50">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Contact or Connect with Me</h3>
                        <a
                            href="mailto:rohitpithani13@gmail.com"
                            className="inline-block px-8 py-3 rounded-lg bg-primary text-black font-medium hover:bg-primary/80 transition hover:underline"
                        >
                            rohitpithani13@gmail.com
                        </a>

                        <div className="flex justify-center items-center mt-8 gap-6 animate-pulse hover:animate-none">
                            <RevealButtons>
                                <div className="flex gap-6">
                                    <GitHubIcon
                                        size={40}
                                        fill="#52525B"
                                        className="transition-transform transform hover:scale-150"
                                        onClick={() => { window.open("https://github.com/RohitPithani026", "__blank"); }}
                                    />
                                    <LinkDinIcon
                                        size={40}
                                        fill="#52525B"
                                        className="transition-transform transform hover:scale-150"
                                        onClick={() => { window.open("https://www.linkedin.com/in/rohit-pithani-855018324/", "__blank"); }}
                                    />
                                    <TwitterIcon
                                        size={40}
                                        fill="#52525B"
                                        className="transition-transform transform hover:scale-150"
                                        onClick={() => { window.open("https://x.com/rohitpithani13", "__blank"); }}
                                    />
                                </div>
                            </RevealButtons>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
