import { z } from "zod"
export const SignupValidation = z.object({
    username: z.string().min(2).max(50),
    name: z.string().min(2, {message:"too Short"}),
    email: z.string().email(),
    password: z.string().min(2, {message:"must be atleat 8 char"}),
  })
  