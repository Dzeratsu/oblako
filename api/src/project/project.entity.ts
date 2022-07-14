import {Column, PrimaryGeneratedColumn, Entity} from "typeorm";
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity('project')
export class ProjectEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid') id: number

    @Field()
    @Column('varchar', {length: 255, unique: true, nullable: false})
    title: string
}