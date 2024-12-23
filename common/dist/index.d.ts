import z from "zod";
export declare const signupInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    name?: string | undefined;
}, {
    username: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updateUserInput: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    biography: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    password?: string | undefined;
    name?: string | undefined;
    biography?: string | undefined;
}, {
    username?: string | undefined;
    password?: string | undefined;
    name?: string | undefined;
    biography?: string | undefined;
}>;
export declare const updateBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: number;
}, {
    title: string;
    content: string;
    id: number;
}>;
export type Signupinput = z.infer<typeof signupInput>;
export type Signininput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type updateUserInput = z.infer<typeof updateUserInput>;
export type updateBlogInput = z.infer<typeof updateBlogInput>;
