/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { Book } from "./book/data/book.dto";
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class BookService {
    public books : Book[] = [];

    // add book
    addBookService(book : Book) : string{
        // id auto grnerated
        book.id = uuid4();
        this.books.push(book);
        return 'Book has been sucessfully added';
    }

    // update book
    updateBookService(book : Book) : string{
        const index =this.books.findIndex((currentBook) =>{
            return currentBook.id == book.id;
        });
        this.books[index] = book;
        return `Book has been sucessfully updated`;
        
    }

    //delete book
    deleteBookService(bookId : string) : string{
        this.books = this.books.filter((book)=>{
                  return book.id != bookId;
        });
        return "Book has been deleted";
    }

    // find all book
    findAllBooks() : Book[]{
        
        return this.books;
    }
}