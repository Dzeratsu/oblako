import {InputType, Field} from "@nestjs/graphql";

@InputType()
export class CreateProjectDto {
    @Field() readonly title: string
}
