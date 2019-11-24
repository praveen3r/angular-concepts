import { Component, OnInit } from '@angular/core';
import { AuthService } from './scripts/services/auth.service'
import { UserService } from './scripts/services/user.service'
import { MenuService } from './scripts/services/menu.service'
import { User } from './scripts/models/User';
import { NavLinks } from './scripts/models/navLinks';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demoproj';
  //authData:any = {};
  authData:any = {};
  user:User;
  menuList: NavLinks[];

    
  constructor(private state: StateService, private authService: AuthService,private userService: UserService,
             private menuService:MenuService) { 
    this.authData.isLoggedIn = false;
  }

  ngOnInit() {
      this.authService.loggedInChange.subscribe((data) => {
        this.authData.isLoggedIn = data;
      }); 
      this.userService.userObs.subscribe((data) => {
        this.user = data;
      }); 
      this.menuService.menuObs.subscribe((data) => {
        this.menuList = data.getMenuList();
      });

    
    }

    logout(): void {
      this.authService.setIsLoggedIn(false);
      this.menuList = this.menuList.splice(0,this.menuList.length);
      this.state.go("login");
    }

    loadView(stateName: string): void{
      this.state.go(stateName);
    
    
  }

  
}
