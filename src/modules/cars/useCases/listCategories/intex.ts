import { CategoriesRepository } from "../../repository/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesControler = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesControler };
