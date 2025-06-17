import { Router  } from "express";

const routes = Router();

// rota de teste, hello world
routes.get("/", (req , res)  => {
  return res.send(`rota de teste`);
});

export default routes;