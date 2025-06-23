import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

//inicializando o prisma
const prisma = new PrismaClient()

export default {
    //requisição de criar usuário
     create : async(req: Request, res: Response) => {
        const user = await prisma.userInfo.create({data: req.body})
        return res.status(201).json(user)
    },

    //retorna as infos dos usuarios 
    read : async(req: Request, res: Response) => {
        const users = await prisma.userInfo.findMany()
        return res.status(200).json(users)
    },

    //alterar as infos dos usuarios
    update : async(req: Request, res: Response) => {
        const id = req.params.id
        const user = await prisma.userInfo.update({data: req.body, where: {id : +id}})
        console.log(user)
        return res.status(200).json(user)
    },

    //deletar as infos dos usuarios
    delete : async(req: Request, res: Response) => {
        const id = req.params.id
        const user = await prisma.userInfo.delete({where: {id : +id}})
        return res.status(200).json(user)
    },

    //login do usuario
    login : async(req: Request, res: Response) => {
        const {email, password} = req.body
        const user = await prisma.userInfo.findFirst({where: {email, password}, select: {password: false, id: true, fullName: true, email: true}})
        console.log(user)
        if(user) return res.status(200).json(user)
        return res.status(404).send("User not found")
    },


}

