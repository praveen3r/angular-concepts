import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { HttpService } from './../../services/http.service'
import { User } from './../../models/User';
import { StateService } from '@uirouter/angular';
import { UserMaintService } from './../../services/userMaint.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styles: []
})
export class UserHomeComponent implements OnInit {

  public userList: User[];
  public userListCopy: User[];
  userNameFltr: any;

  constructor(private authService: AuthService, private httpService: HttpService,private state: StateService,
               private userMaintService: UserMaintService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.httpService.getUsersList().subscribe( (response) => {
         this.userList = response.entityList;
         this.userListCopy = Object.assign([],this.userList);
       })
  }

  onClickModify(rowObj:any): void{
    this.userMaintService.setUserMaintDet(rowObj);
    this.state.go("user.details");
  }

  onChangeUserName(value:string): void {
    this.userNameFltr = value.toUpperCase();
    var userNamePattern = new RegExp(value.toUpperCase().replace(/ +/g, ' '),'gi');
    this.userList = this.userList.filter(userObj => userObj.userName.replace(/ +/g, ' ').match(userNamePattern));
  }

  onClickReset(): void{
    this.userList = Object.assign([],this.userListCopy);
  }

  
}
