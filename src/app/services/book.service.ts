import { ProcessHttpmsgService } from './process-httpmsg.service';
import { catchError, Observable, of } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { baseURL } from '../shared/baseurl';
import { Book } from '../shared/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BOOKS } from '../shared/booklist';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgService,
    @Inject('BaseURL') protected baseURL:any) { }

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
}
