import AppDataSource from "../data-source";
import { Video } from "../entities/Videos";

type DeleteRequest = {
    id: string
}

export class DeleteVideoService {
    async execute({ id }: DeleteRequest) {
        const repo = AppDataSource.getRepository(Video)

        if(!await repo.findOneBy({ id })) {
            return new Error("Video does not exists")
        }

        await repo.delete({ id })
    }
}