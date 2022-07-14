import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProjectEntity} from "./project.entity";
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([ProjectEntity])],
    providers: [ProjectService, ProjectResolver]
})
export class ProjectModule {}
