import { createBlogInput, updateBlogInput } from "@rohit026/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user) {
            //@ts-ignore
            c.set("userId", user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in"
            });
        }
    } catch (e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        });
    }
});

// Create Route
blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        });
    }

    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId)
        }
    });

    return c.json({
        id: blog.id,
        authId: authorId
    });
});

// Update Route
blogRouter.put('/updateBlog/:id', async (c) => {
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        });
    }

    const blogId = Number(c.req.param("id"));
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        where: {
            id: blogId
        },
        data: {
            title: body.title,
            content: body.content
        }
    });

    return c.json({
        id: blog.id,
        message: "Blog updated successfully"
    });
});

// Delete Route
blogRouter.delete('/deleteBlog/:id', async (c) => {
    const blogId = Number(c.req.param("id"));
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        await prisma.blog.delete({
            where: {
                id: blogId
            }
        });

        return c.json({
            message: "Blog deleted successfully"
        });
    } catch (error) {
        c.status(404);
        return c.json({
            message: "Blog not found or already deleted"
        });
    }
});

// Other routes remain the same

// Todo: add pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogs = await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            publishedAt: true,
            author: {
                select: {
                    name: true,
                    id: true
                }
            }
        }
    });

    const formattedBlogs = blogs.map(blog => ({
        ...blog,
        publishedAt: new Date(blog.publishedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    }));

    return c.json({
        blogs: formattedBlogs
    });
});

blogRouter.get('/userBlog/:userId', async (c) => {
    const id = c.req.param("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const userBlogs = await prisma.blog.findMany({
        where: {
            authorId: Number(id)
        },
        select: {
            id: true,
            title: true,
            content: true,
            publishedAt: true,
            author: {
                select: {
                    name: true,
                    biography: true
                }
            }
        }
    });

    if (!userBlogs) {
        c.status(404);
        return c.json({
            message: "Blogs not found"
        });
    }

    const formattedBlogs = userBlogs.map(blogs => ({
        ...blogs,
        publishedAt: new Date(blogs.publishedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    }));

    return c.json({
        userBlogs: formattedBlogs
    });
});

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            id: true,
            title: true,
            content: true,
            publishedAt: true,
            author: {
                select: {
                    name: true,
                    biography: true
                }
            }
        }
    });

    if (!blog) {
        c.status(404);
        return c.json({
            message: "Blog not found"
        });
    }

    // Format the publishedAt date
    const formattedBlog = {
        ...blog,
        publishedAt: new Date(blog.publishedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    };

    return c.json({
        blog: formattedBlog
    });
});
