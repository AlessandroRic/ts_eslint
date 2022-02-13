import "reflect-metadata";
import { container } from "tsyringe"
import { UsersRepository } from "../../modules/accounts/repository/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repository/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repository/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/repository/implementations/CategoriesRepository"
import { SpecificationsRepository } from "../../modules/cars/repository/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repository/ISpecificationsRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);