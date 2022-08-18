import { UserService } from './../services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../shared/book';
import { User } from '../shared/user';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})


export class BooksComponent implements OnInit {

  books!: Book[];
  user!: User;




  constructor(private bookService: BookService,
    private userService: UserService,
    @Inject('BaseURL') protected baseURL:any) { }

  ngOnInit(): void {
    this.user = this.userService.getUser("1")
    this.bookService.getBooks()
    .subscribe(books => this.books = books)
  }

  toRead(book: Book){
    this.userService.addBook(this.user, book );
  }

}
