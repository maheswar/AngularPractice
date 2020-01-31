import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../usercreate/userservice';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated:boolean;
  logOutSub:Subscription;
  logInSub:Subscription;
  constructor(private userService:UserService,private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.logOutSub=this.userService.logOut.subscribe(e=>{
      this.auth.loginKey=""
      this.route.navigate(['/login'])
    })
    this.logInSub=this.userService.logInSub.subscribe(e=>{
      this.isAuthenticated=true;
      this.route.navigate(['/recipes'])
    })
  }
  
  ngOnDestroy(){
    this.logOutSub.unsubscribe();
  }
  logout(){
    this.isAuthenticated=false;
    this.userService.logout(this.auth.loginKey);    
  }
}
