import { Component, OnInit } from '@angular/core';
import { UserService } from './usercreate/userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.autoLogin();
  }
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
