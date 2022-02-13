import { Router } from "express";
import { CreateSpecificicationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificicationController();

specificationsRoutes.post("/", createSpecificationController.handle);

// specificationsRoutes.get("/", (request, response) => {
//     const all = specificationsRepository.list();

//     return response.json(all);
// });

export { specificationsRoutes };
