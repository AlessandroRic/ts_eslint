import { Specification } from "../entities/Specification";

interface ICreateSpeficicationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpeficicationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpeficicationDTO };
