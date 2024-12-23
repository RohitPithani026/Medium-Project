import { useState, useEffect } from 'react';
import axios from 'axios';

export const Quote = () => {
    const [quote, setQuote] = useState<string | null>(null); 
    const [author, setAuthor] = useState<string>("");  

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/quotes'); 
            const data = response.data;  

            if (data && data.quotes && data.quotes.length > 0) {
                const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
                setQuote(randomQuote.quote);  
                setAuthor(randomQuote.author);  
            } else {
                console.error('No quotes found');
            }
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        fetchQuote(); 

        const intervalId = setInterval(fetchQuote, Math.floor(Math.random() * 2500) + 2500); 

        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className="bg-slate-200 h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="max-w-lg">
                    {/* Display the quote */}
                    <div className="text-3xl font-bold">
                        "{quote || "Loading quote..."}" {/* Display placeholder text while loading */}
                    </div>
                    {/* Display the author */}
                    <div className="max-w-md text-xl font-semibold text-left mt-4">
                        {author || "Unknown Author"} {/* Display placeholder for author */}
                    </div>
                </div>
            </div>
        </div>
    );
};
