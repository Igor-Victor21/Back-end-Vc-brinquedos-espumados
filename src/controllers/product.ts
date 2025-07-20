import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

// inicializando o prisma
const prisma = new PrismaClient();

export default {
// requisição de criar produtos novos
create: async (req: Request, res: Response) => {
try {
const { name, description, measures, price, image, section } = req.body;

const product = await prisma.products.create({
data: {
name,
description,
measures,
price: parseFloat(price),
image,
section: section || "Todos",
},
});

return res.status(201).json(product);
} catch (error) {
console.error("Erro ao criar produto:", error);
return res.status(500).json({ error: "Erro ao criar produto" });
}
},

// retorna as infos dos produtos (com filtro por seção opcional)
read: async (req: Request, res: Response) => {
try {
const section = req.query.section?.toString(); // ?section=Promoção

const products = await prisma.products.findMany({
where: section ? { section } : undefined,
});

return res.status(200).json(products);
} catch (error) {
console.error("Erro ao buscar produtos:", error);
return res.status(500).json({ error: "Erro ao buscar produtos" });
}
},

// retorna a info de um produto
readOne: async (req: Request, res: Response) => {
try {
const id = req.params.id;

const product = await prisma.products.findUnique({
where: { id: +id },
});

if (!product) {
return res.status(404).json({ error: "Produto não encontrado" });
}

return res.status(200).json(product);
} catch (error) {
console.error("Erro ao buscar produto:", error);
return res.status(500).json({ error: "Erro ao buscar produto" });
}
},

// alterar as infos dos produtos
update: async (req: Request, res: Response) => {
try {
const id = req.params.id;
const { name, description, measures, price, image, section } = req.body;

const product = await prisma.products.update({
where: { id: +id },
data: {
name,
description,
measures,
price: parseFloat(price),
image,
section,
},
});

return res.status(200).json(product);
} catch (error) {
console.error("Erro ao atualizar produto:", error);
return res.status(500).json({ error: "Erro ao atualizar produto" });
}
},

// deletar produto
delete: async (req: Request, res: Response) => {
try {
const id = req.params.id;

const product = await prisma.products.delete({
where: { id: +id },
});

return res.status(200).json(product);
} catch (error) {
console.error("Erro ao deletar produto:", error);
return res.status(500).json({ error: "Erro ao deletar produto" });
}
},
};
