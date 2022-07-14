import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {ProjectService} from "./project.service";
import {ProjectEntity} from "./project.entity";
import {CreateProjectDto} from "./dto/createProjectDto";

@Resolver('project')
export class ProjectResolver {
    constructor(
        private readonly ProjectService: ProjectService
    ) {
    }

    @Mutation(() => ProjectEntity)
    async createProject(@Args('createProject') data: CreateProjectDto): Promise<ProjectEntity> {
        return await this.ProjectService.createProject(data)
    }

    @Query(() => [ProjectEntity])
    async getAllProject(): Promise<ProjectEntity[]> {
        return await this.ProjectService.getProject()
    }
}
