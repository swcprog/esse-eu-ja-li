import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../shared/user';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  users!: User[];
  user!: User;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.user = this.service.getUser("1");
    this.service.getUsers()
    .subscribe(users => {this.users = users.sort(this.sortByPoints).reverse(),
    this.users.forEach(user => {
      this.service.setUserPoints(user.id)})
    });
  }

  sortByPoints(userA: User, userB: User){
    return (parseInt(userA.totalPoints) - parseInt(userB.totalPoints))
  }

}
