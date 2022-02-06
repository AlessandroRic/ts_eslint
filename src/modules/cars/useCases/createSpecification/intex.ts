import { SpecificationsRepository } from "../../repository/implementations/SpecificationsRepository";
import { CreateSpecificicationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createSpecificationController = new CreateSpecificicationController(createSpecificationUseCase);

export { createSpecificationController };
