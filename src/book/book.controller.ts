/* eslint-disable prettier/prettier */

import { Controller, Get } from "@nestjs/common";
import { BookService } from "src/book.service";
import { Book } from "./data/book.dto";


@Controller("book")
export class BookController{

    constructor (private bookService : BookService){

    }

    @Get("/findAll")
    getAllBooks() : Book[]{
        return this.bookService.findAllBooks();
    }

}