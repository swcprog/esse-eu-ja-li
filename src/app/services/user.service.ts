import { Injectable } from '@angular/core';
import { USERS } from '../shared/userlist';
import { Observable, of } from 'rxjs';
import { User } from '../shared/user';
import { Book } from '../shared/book';
import { UntypedFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users!: User[];
  user!: User;

  constructor() {
    this.getUsers().subscribe((users) => (this.users = users));
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUser(id: string): User {
    var user!: User;

    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if (element.id === id) {
        user = element;
      }
    }
    this.user = user;
    return user;
  }

  getUserBookList(id: string): Book[] {
    return this.getUser(id).booksList;
  }

  addBook(user: User, book: Book): boolean {
    if (user.booksList.indexOf(book) == -1) {
      user.booksList.push(book);
      book.read = true;
    }
    return book.read;
  }

  setUserPoints(id: string) {
    let pointsString!: string;
    let points: number = 0;
    let booklist = this.getUserBookList(id);

    booklist.forEach((book) => {
      points += parseInt(book.point);
    });

    pointsString = points.toString();

    this.getUser(id).totalPoints = pointsString;
  }

  setSpecialist(user: User){
    let fantasy = 0;
    let adventure = 0;
    let drama = 0;

    user.booksList.forEach(book => {
      if(book.category == "fantasy"){ fantasy++}
      if(book.category == "adventure"){ adventure++}
      if(book.category == "drama"){ drama++}
    });

    if (fantasy>4 && user.specialist.indexOf("Fantasy")){ user.specialist.push("Fantasy")}
    if (adventure>4 && user.specialist.indexOf("Adventure")){ user.specialist.push("Adventure")}
    if (drama>44 && user.specialist.indexOf("Drama")){ user.specialist.push("Drama")}
  }

}
