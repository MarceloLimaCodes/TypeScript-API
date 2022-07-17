import AppDataSource from "../data-source";
import { Category } from "../entities/Category";

type DeleteRequest = {
    id: string
}

export class DeleteCategoryService {
    async execute({ id }: DeleteRequest): Promise<Category | Error> {
        const repo = AppDataSource.getRepository(Category)

        if(!await repo.findOneBy({ id })) {
            return new Error("Category does not exists")
        }

        await repo.delete({ id })
    }
}