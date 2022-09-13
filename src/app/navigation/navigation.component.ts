import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, switchMap } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  userID!: string;
  user!: any;
  notLoginPage!: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {}

  logout(){
    console.log("logout");
    this.user = null;
    this.userID = "";
    location.reload();

  }


  ngOnInit(): void{

    this.activatedRoute.queryParams.subscribe((params) => {
    this.userID = params['key'].toString();
    console.log(this.userID)
    this.user = this.userService.getUser(this.userID);
    });
  }
}
