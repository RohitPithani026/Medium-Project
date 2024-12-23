import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput, updateUserInput } from "@rohit026/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            }
        })
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET);

        return c.json({
            id: user.id,
            jwt: jwt
        })
    } catch (e) {
        console.log(e);
        c.status(411);
        return c.text('Invalid')
    }
})


userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password,
            }
        })
        if (!user) {
            c.status(403);
            return c.json({
                message: "Incorrect creds"
            })
        }
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET);

        return c.json({
            id: user.id,
            jwt
        })
    } catch (e) {
        console.log(e);
        c.status(411);
        return c.text('Invalid')
    }
})

userRouter.put('/:id', async (c) => {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { success } = updateUserInput.safeParse(body);

    if (!success) {
        c.status(400); 
        return c.json({
            message: "Invalid input format",
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.update({
            where: { 
                id: Number(id)
            },
            data: {
                name: body.name,
                password: body.password,
                biography: body.biography,
                username: body.username
            },
        });

        return c.json({
            message: "User profile updated successfully",
            user,
        });
    } catch (e) {
        console.error(e);
        c.status(500); 
        return c.json({ message: "An error occurred while updating the profile" });
    }
});


userRouter.get('/users', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const users = await prisma.user.findMany({
        select: {
            name: true,
            username: true,
            biography: true,
            id: true,
        }
    });

    return c.json({
        users
    })
})

userRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const userId = c.req.param("id");

    try {
        const user = await prisma.user.findUnique({
            where: { 
                id: Number(userId)
            },
            select: {
                id: true,
                name: true,
                username: true,
                biography: true,
            }
        },
    );

        if (!user) {
            c.status(404);
            return c.json({ message: "User not found" });
        }

        return c.json({
            user
        });
    } catch (error) {
        console.error(error);
        c.status(500);
        return c.json({ message: "Internal Server Error" });
    }
});