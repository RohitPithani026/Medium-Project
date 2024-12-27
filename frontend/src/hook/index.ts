import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
export interface Blog {
    "content": string;
    "title": string;
    "id": number;
    "publishedAt": string;
    "author": {
        "name": string;
        "biography": string
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blogg, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blogg
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}

export interface userBlog {
    "id": number;
    "title": string;
    "content": string;
    "publishedAt": string;
    "author": {
        "name": string;
        "biography": string
    }
}


export const useUserBlogs = ({ userId }: { userId: string }) => {
    const [loading, setLoading] = useState(true);
    const [userBlog, setUserBlog] = useState<userBlog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/userBlog/${userId}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setUserBlog(response.data.userBlogs);
                setLoading(false);
            })
    }, [userId])

    return {
        loading,
        userBlog,
        setUserBlog
    }
}

export interface User {
    "name"?: string;
    "username"?: string;
    "biography"?: string;
    "id": number;
}

export const useUser = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/user/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        })
            .then(response => {
                setUser(response.data.user);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        user
    }
}

export type UpdateUser = {
    "name"?: string;
    "username"?: string;
    "biography"?: string;
    "password"?: string;
};

export const useUserUpdate = ({ id }: { id: string }) => {
    const updateUser = (updateData: UpdateUser) => {
        return axios.put(`${BACKEND_URL}/api/v1/user/${id}`, updateData, {
            headers: {
                Authorization: localStorage.getItem("token") || "",
            },
        });
    };

    return { updateUser };
};

export const useBlogDelete = ({ id }: { id: string }) => {
    const deleteBlog = () => {
        return axios.delete(`${BACKEND_URL}/api/v1/blog/deleteBlog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token") || "",
            },
        });
    };

    return { deleteBlog };
};

export const useBlogUpdate = ({ id }: { id: string }) => {
    const updateBlog = (updateData: Partial<Blog>) => {
        return axios.put(`${BACKEND_URL}/api/v1/blog/updateBlog/${id}`, updateData, {
            headers: {
                Authorization: localStorage.getItem("token") || "",
            },
        });
    };

    return { updateBlog };
};