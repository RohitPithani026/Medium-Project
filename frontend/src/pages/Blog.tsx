import { Toaster } from "../components/sonner";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";
import { toast } from "sonner";


export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        toast("Blog is loading...");
        return (
            <div>
                <Appbar />
                <div className="h-screen flex flex-col justify-center">
                    <div className="flex justify-center">
                        <Spinner />
                    </div>
                </div>
            </div>
        );
    }
    toast("Blog loaded successfully!");
    return <div>
        <Toaster />
        <FullBlog blog={blog} />
    </div>
}