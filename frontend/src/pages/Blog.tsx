import { Toaster } from "../components/sonner";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hook";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { FullBlogSkeleton } from "@/components/FullBlogSkeleton";
import { useState, useEffect } from "react";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blogg } = useBlog({ id: id || "" });
    const [toastShown, setToastShown] = useState(false);

    useEffect(() => {
        if (!loading && blogg && !toastShown) {
            // Trigger the toast when loading finishes and blog is available
            toast("Blog loaded successfully!");
            setToastShown(true);
        }
    }, [loading, blogg, toastShown]); // Re-run when these dependencies change

    if (loading || !blogg) {
        toast("Blog is loading...");
        return (
            <div>
                <Appbar />
                <div className="h-screen flex flex-col justify-center">
                    <div className="flex justify-center">
                        <FullBlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Toaster />
            <FullBlog blog={blogg} />
        </div>
    );
};
