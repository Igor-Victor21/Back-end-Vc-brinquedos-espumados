import { Router, Request, Response  } from "express";
import userController from "./controllers/user"
import productController from "./controllers/product"

const routes = Router();

// rota de teste, hello world
routes.get("/", (req: Request , res: Response):  any => {
  return res.send(`rota de teste`);
});

routes.get("/funcionarios", (req: Request , res: Response):  any => {
  return res.json({
    items: [
      {
        id: "01",
        nome: "Igor",
        cargo: "Estudante",
        idade: 22,
        custoPorHora: 0.0,
        temLicenca: false,
      },
      {
        id: "02",
        nome: "Vinicius",
        cargo: "Dev",
        idade: 22,
        custoPorHora: 106.0,
        temLicenca: true,
      },
      {
        id: "03",
        nome: "Fabio",
        cargo: "Dev",
        idade: 19,
        custoPorHora: 130.0,
        temLicenca: false,
      },
      {
        id: "04",
        nome: "Jaqueline",
        cargo: "Design",
        idade: 21,
        custoPorHora: 100.0,
        temLicenca: true,
      },
    ],
  });
});

routes.post("/users", (req: Request, res: Response) : any => userController.create(req,res));
routes.get("/users", (req: Request, res: Response) : any => userController.read(req,res));
routes.put("/users/:id", (req: Request, res: Response) : any => userController.update(req,res));
routes.delete("/users/:id", (req: Request, res: Response) : any => userController.delete(req,res));

routes.post("/products", (req: Request, res: Response) : any => productController.create(req,res));
routes.get("/products", (req: Request, res: Response) : any => productController.read(req,res));
routes.put("/products/:id", (req: Request, res: Response) : any => productController.update(req,res));
routes.delete("/products/:id", (req: Request, res: Response) : any => productController.delete(req,res));

export default routes;