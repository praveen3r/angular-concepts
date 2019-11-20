import { Injectable } from '@angular/core';
import { Observable, Observer, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 loggedInChange: Observable<boolean>;
  //loggedInChangeObserver: Observer<boolean>;
  private loggedInSubject = new Subject<boolean>();

  constructor() { 
    /*this.loggedInChange = new Observable((observer: Observer<boolean>) {
      this.loggedInChangeObserver = observer;
    });*/
    this.loggedInChange = this.loggedInSubject.asObservable();
  }

  public setIsLoggedIn(isLoggedInVal: boolean): void {
   this.loggedInSubject.next(isLoggedInVal);
  }

}
