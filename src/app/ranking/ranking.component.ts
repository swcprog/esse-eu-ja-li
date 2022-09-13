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
  vazia = true;
  specialistMsg = '';
  constructor(private service: UserService) { }

  ngOnInit(): void {

    this.service.getUsers()
    .subscribe(users => {this.users = users,
    this.users.forEach(user => {
      this.service.setUserPoints(user.id);
      this.service.setSpecialist(user);
       this.setSpecialist(user);
       console.log(this.specialistMsg)
       }),
      this.users.sort((this.sortByPoints))
    });

  }

  setSpecialist(user: User){
    user.specialist.forEach(speciality => {
      if(speciality != ''){
        this.specialistMsg += ` ${speciality} `
      }

    });
  }

  sortByPoints(userA: User, userB: User){
    return (parseInt(userB.totalPoints) - parseInt(userA.totalPoints))
  }



}
