import { Component, Inject, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})


export class BooksComponent implements OnInit {

  books!: Book[];

  constructor(private service: BookService,
    @Inject('BaseURL') protected baseURL:any) { }

  ngOnInit(): void {
    this.service.getBooks()
    .subscribe(books => this.books = books)
  }

}
