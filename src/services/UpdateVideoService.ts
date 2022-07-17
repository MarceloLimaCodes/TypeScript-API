import AppDataSource from "../data-source"
import { Video } from "../entities/Videos"

type UpdateRequest = {
    id: string
    name: string
    description: string
    duration: number
    category_id: string
}
export class UpdateVideoService {
    async execute({ id, name, description, duration, category_id }: UpdateRequest) {
        const repo = AppDataSource.getRepository(Video)

        const video = await repo.findOneBy({ id })

        if(!video) {
            return new Error("Video does not exist")
        }

        video.name = name ? name : video.name
        video.description = description ? description : video.description 
        video.duration = duration ? duration : video.duration
        video.category_id = category_id ? category_id : video.category_id

        await repo.save(video)

        return video
    }
}