import { Component, OnInit } from '@angular/core';
import { UserMaintService } from './../../services/userMaint.service';
import { StateService } from '@uirouter/angular';
import { FormsModule } from '@angular/forms'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: './user-details.component.html'  
})
export class UserDetailsComponent implements OnInit {

  private userData: any;
  
  constructor(private userMaintService: UserMaintService,private state: StateService) { 
    
  }

  ngOnInit() {
    this.userData = this.userMaintService.getUserMaintDet();
    console.log(this.userData);
  }

  back(): void{
    this.state.go("user.home");
  }

}
