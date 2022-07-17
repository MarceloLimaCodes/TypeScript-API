import AppDataSource from "../data-source";
import { Category } from "../entities/Category";

type UpdateRequest = {
    id: string
    name: string
    description: string
}

export class UpdateCategoryService {
    async execute({ id, name, description }: UpdateRequest ) {
        const repo = AppDataSource.getRepository(Category)

        const category = await repo.findOneBy({ id })

        if(!category) {
            return new Error("Category does not exist")
        }

        category.name = name ? name : category.name 
        category.description = description ? description : category.description

        await repo.save(category)

        return category

    }
}