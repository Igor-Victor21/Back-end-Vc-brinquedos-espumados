import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

//inicializando o prisma
const prisma = new PrismaClient()

export default {
    //requisição de criar usuário
     create: async(req: Request, res: Response) => {
        const user = await prisma.user.create({data: req.body})
        return res.status(201).json(user)
    },
}