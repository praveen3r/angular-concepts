import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { UserService } from './../../services/user.service'
import { MenuService } from './../../services/menu.service'
import { User } from './../../models/User';
import { NavLinks } from './../../models/navLinks';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './../../../views/app.component.html',
  styleUrls: ['./../../../css/app.component.css']
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
