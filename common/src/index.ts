import z from "zod";

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
})

export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})

export const updateUserInput = z.object({
    username: z.string().optional(), 
    name: z.string().optional(),
    biography: z.string().optional(),
    password: z.string().optional(),
});

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})

export type Signupinput = z.infer<typeof signupInput>
export type Signininput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type updateUserInput = z.infer<typeof updateUserInput>
export type updateBlogInput = z.infer<typeof updateBlogInput>