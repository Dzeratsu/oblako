import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ProjectEntity} from "./project.entity";
import {Repository} from "typeorm";
import {CreateProjectDto} from "./dto/createProjectDto";

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(ProjectEntity)
        private readonly projectRepository: Repository<ProjectEntity>
    ) {}

    async createProject(data: CreateProjectDto): Promise<ProjectEntity> {
        return await this.projectRepository.save(data)
    }
    async getProject(): Promise<ProjectEntity[]> {
        return await this.projectRepository.find()
    }
}
