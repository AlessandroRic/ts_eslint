import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repository/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create category", () => {

    beforeEach(() =>  {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
    })

    it("Should be able to create a new category", async () => {
        const category = {
            name: "alessandro",
            description: "Category test"
        }

        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            category.name
        );

        expect(categoryCreated).toHaveProperty("id");
    })

    it("Should not be able to create a new category with name exists", async () => {
        expect(async () => {
            const category = {
                name: "alessandro",
                description: "Category test"
            }
    
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            });
    
            const categoryCreated = await categoriesRepositoryInMemory.findByName(
                category.name
            );
        }).rejects.toBeInstanceOf(AppError);
    })
})