import { Component, OnInit } from '@angular/core';
import { UserService } from '../usercreate/userservice';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  pswd:string;

  constructor(private userService:UserService,private auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    var that=this;
    this.userService.login(this.username,this.pswd).then(function(d:string){
      that.auth.loginKey=d;      
      alert("Log in Successfull")
   }).catch(function(e){
     alert(e);
   })
  }
 
  signup(){
    this.userService.addUser(this.username,this.pswd);
    this.username="";
    this.pswd="";
  }
}
