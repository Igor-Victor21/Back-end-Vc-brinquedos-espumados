import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

//inicializando o prisma
const prisma = new PrismaClient()

export default {
    //requisição de criar produtos novos
     create : async(req: Request, res: Response) => {
        const product = await prisma.products.create({data: req.body})
        return res.status(201).json(product)
    },

    //retorna as infos dos produtos 
    read : async(req: Request, res: Response) => {
        const products = await prisma.products.findMany()
        return res.status(200).json(products)
    },

    //retorna a info de um produto
    readOne : async(req: Request, res: Response) => {
        const id = req.params.id
        const products = await prisma.products.findUnique({where: {id : +id}});
        if (!products) {return res.status(404).json({ error: 'Produto não encontrado' });}
        return res.status(200).json(products)
    },

    //alterar as infos dos produtos
    update : async(req: Request, res: Response) => {
        const id = req.params.id
        const product = await prisma.products.update({data: req.body, where: {id : +id}})
        console.log(product)
        return res.status(200).json(product)
    },

    //deletar as infos dos produtos
    delete : async(req: Request, res: Response) => {
        const id = req.params.id
        const product = await prisma.products.delete({where: {id : +id}})
        return res.status(200).json(product)
    },
}