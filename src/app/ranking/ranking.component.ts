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

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(users => this.users = users)
  }

}
