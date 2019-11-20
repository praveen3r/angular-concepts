import { Injectable } from '@angular/core';
import { Observable, Observer, Subject} from 'rxjs';
import { User } from './../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private user:User;
 userObs: Observable<User>;
 private userSub = new Subject<User>();

  constructor() { 
    this.userObs = this.userSub.asObservable();
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(userVal: User): void {
   this.user = userVal;
   this.userSub.next(userVal);
  }

}
