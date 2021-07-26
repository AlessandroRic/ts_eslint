import { Specification } from "../model/Specification";

interface ICreateSpeficicationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpeficicationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpeficicationDTO };
