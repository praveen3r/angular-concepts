import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserMaintService {

 private userMaintDet:any;
 
  constructor() { 
    
  }

  public getUserMaintDet(): any {
    return this.userMaintDet;
  }

  public setUserMaintDet(userMaintDetVal: any): void {
   this.userMaintDet = userMaintDetVal;
   
  }

}
