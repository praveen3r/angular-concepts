import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { HttpService } from './../../services/http.service'
import { User } from './../../models/User';
import { StateService } from '@uirouter/angular';
import { FormsModule } from '@angular/forms'

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  public userList: User[];

  constructor(private authService: AuthService, private httpService: HttpService,private state: StateService) {
    //console.log("coming to constructor");
   }

  ngOnInit() {
    //console.log("coming to ngOnInit");
  }

  getUsers(): void{
    this.httpService.getUsersList().subscribe( (response) => {
         this.userList = response.entityList;
       })
  }

  onClickModify(rowObj:any): void{
    console.log("coming here to onClickModify")
    this.state.go("user.details");
  }

}
