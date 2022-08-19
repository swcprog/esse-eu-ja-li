import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../shared/book';
import { User } from '../shared/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})



export class BooksComponent implements OnInit {
  books!: Book[];
  user!: User;
  userID!: any;

  constructor(
    private bookService: BookService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    @Inject('BaseURL') protected baseURL: any
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.user = this.userService.getUser(params['key'].toString());
    });

    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  toRead(book: Book) {
    this.userService.addBook(this.user, book);
    this.openSackBar(book.point);
  }

  openSackBar(points: string) {
    this._snackBar.open("Livro Adicionado","+" + points + " pontos", {duration: 2000})
  }


}
