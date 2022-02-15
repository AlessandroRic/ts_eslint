import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificicationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificicationController();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post("/", createSpecificationController.handle);

// specificationsRoutes.get("/", (request, response) => {
//     const all = specificationsRepository.list();

//     return response.json(all);
// });

export { specificationsRoutes };
