import { Toaster } from "../components/sonner";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hook";
import {useParams} from "react-router-dom";
import { toast } from "sonner";
import { FullBlogSkeleton } from "@/components/FullBlogSkeleton";


export const Blog = () => {
    const { id } = useParams();
    const {loading, blogg} = useBlog({
        id: id || ""
    });

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
    toast("Blog loaded successfully!");
    return <div>
        <Toaster />
        <FullBlog blog={blogg} />
    </div>
}