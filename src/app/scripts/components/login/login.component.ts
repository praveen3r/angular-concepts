import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AuthService } from './../../services/auth.service'
import { UserService } from './../../services/user.service'
import { NavigationService } from './../../services/navigation.service'
import { MenuService } from './../../services/menu.service'
import { User } from './../../models/User';
import { NavLinks } from './../../models/navLinks';
import { NgForm } from '@angular/forms'
import { Menu } from '../../models/Menu';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  user:User;
  login:any = {};
  
    

  constructor(private state: StateService, private authService: AuthService, private userService: UserService,
              private navigationService: NavigationService, private menuService: MenuService) { 
    this.login.isSubmitted = false;
  }

  ngOnInit() {
    
  }

  onSubmit(form : NgForm){
    this.login.isSubmitted = true;
    if(form.valid){
      this.authService.setIsLoggedIn(true);
      this.user = new User();
      this.user.setUserId(this.login.userId);
      this.userService.setUser(this.user);
      let tabId:any[] = [0,1,2,3,4];
      let menuList:NavLinks[] = this.navigationService.getUserMenuList(tabId);
      let menu:Menu = new Menu();
      menu.setMenuList(menuList);
      this.menuService.setMenu(menu);
      this.state.go("user.home");
    }
  }

  clear(): void{
      this.login.userId = "";
      this.login.pwd = "";
  }

}
