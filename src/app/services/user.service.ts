import { Injectable } from '@angular/core';
import { USERS } from '../shared/userlist';
import { Observable, of } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users!: User [];

  constructor() { }

  getUsers(): Observable <User[]> {
    return of(USERS);
  }
}
