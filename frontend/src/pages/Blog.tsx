import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hook";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FullBlogSkeleton } from "@/components/FullBlogSkeleton";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blogg } = useBlog({ id: id || "" });

    useEffect(() => {
        if (blogg) {
            toast.success("Blog loaded successfully!");
        }
    }, [blogg]);

    if (loading || !blogg) {
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
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <FullBlog blog={blogg} />
        </div>
    );
};
