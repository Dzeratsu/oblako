import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProjectModule} from './project/project.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {ProjectEntity} from "./project/project.entity";


@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.sql',
            driver: ApolloDriver,
            sortSchema: true,
            playground: true
        }),
        TypeOrmModule.forRoot({
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "admin",
            "password": "admin",
            "database": "oblako",
            "synchronize": true,
            "logging": true,
            entities: [ProjectEntity],
        }), ProjectModule],
})
export class AppModule {
}
