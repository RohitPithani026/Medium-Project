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
            <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
                <p className="text-3xl sm:text-4xl text-muted-foreground mb-4">Your journey of words begins here</p>
                <TypewriterEffectSmooth words={words} />
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button asChild className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                        <Link to="/signin">
                            Login
                        </Link>
                    </Button>
                    <Button asChild className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
                        <Link to="/signup">
                            Register
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Medium?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm border border-gray-200"
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Writing?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join millions of writers and readers who are already sharing their stories on Medium. Start your writing
                        journey today.
                    </p>
                    <Button asChild className="group">
                        <Link to="/signup">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-8 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="row-span-2 flex flex-col items-center">
                        
                        <div className="w-full h-full flex justify-center gap-4 items-center animate-pulse hover:animate-none ">
                            <RevealButtons>
                                <div className="flex gap-4 group">
                                    <GitHubIcon
                                        size={40}
                                        fill="#52525B"
                                        className="transition-transform transform hover:scale-150 group-hover:animate-none"
                                        onClick={() => { window.open("https://github.com/RohitPithani026", "__blank"); }}
                                    />
                                    <LinkDinIcon
                                        size={40}
                                        fill="#52525B"
                                        className="transition-transform transform hover:scale-150 group-hover:animate-none"
                                        onClick={() => { window.open("https://www.linkedin.com/in/rohit-pithani-855018324/", "__blank"); }}
                                    />
                                    <TwitterIcon
                                        size={40}
                                        fill="#52525B"
                                        className="transition-transform transform hover:scale-150 group-hover:animate-none"
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
