/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { BookService } from "src/book.service";
import { BookController } from "./book.controller";

@Module({
    imports : [],
    controllers : [BookController],
    providers : [BookService]
})
export class BookModule{}