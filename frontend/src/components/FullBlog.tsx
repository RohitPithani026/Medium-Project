import { useParams } from "react-router-dom";
import { Blog, useBlog } from "../hook"
import { Appbar } from "./Appbar"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const FullBlog = ({ blog }: {blog: Blog}) => {

    const { id } = useParams();
    const { blogg } = useBlog({ id: id || "" }); 

    const getInitials = (name: string): string => {
        return name
            .split(" ") 
            .map((part) => part[0]) 
            .join("") 
            .toUpperCase(); 
    };

    const initials = blog.author.name ? getInitials(blog.author.name) : "A";

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on {blog.publishedAt}
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                                <AvatarFallback className="font-semibold">{initials}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                {blogg?.author.biography}
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
}