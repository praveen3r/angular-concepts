import { Injectable } from '@angular/core';
import { Observable, Observer, Subject} from 'rxjs';
import { Menu } from '../models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

 private menu:Menu;
 menuObs: Observable<Menu>;
 private menuSub = new Subject<Menu>();

  constructor() { 
    this.menuObs = this.menuSub.asObservable();
  }

  public getMenu(): Menu {
    return this.menu;
  }

  public setMenu(menuVal: Menu): void {
   this.menu = menuVal;
   this.menuSub.next(menuVal);
  }

}
