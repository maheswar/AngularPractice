import { Component, OnInit } from '@angular/core';
import { UserService } from '../usercreate/userservice';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  pswd: string;
  showDialog = true;
  constructor(private userService: UserService, private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    const that = this;
    this.userService.login(this.username, this.pswd).then((d: string) => {
      that.auth.loginKey = d;
      alert('Log in Successfull');
    }).catch((e) => {
      alert(e);
    });
  }
  hideDialog() {
    this.showDialog = false;
  }
  signup() {
    this.userService.addUser(this.username, this.pswd);
    this.username = '';
    this.pswd = '';
  }
}
