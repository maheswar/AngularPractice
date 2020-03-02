import { Component, OnInit } from '@angular/core';
import { UserService } from './usercreate/userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.autoLogin();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
