import { Injectable } from '@angular/core';
import { NavLinks } from '../models/navLinks';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

 private menuList:NavLinks[]=[];
 private userMenuList:NavLinks[]=[];
 
  constructor() { 
    this.clearAll();
    let userMaint:NavLinks = new NavLinks();
    let userInq:NavLinks = new NavLinks();
    let test:NavLinks = new NavLinks();
    let upload:NavLinks = new NavLinks();
    let testForm:NavLinks = new NavLinks();

    userMaint.setLinkId(0);
    userMaint.setHref("user.home");
    userMaint.setDesc("User Maint");
    userMaint.setLinkType("link");
    this.menuList.push(userMaint);

    userInq.setLinkId(1);
    userInq.setHref("inq");
    userInq.setDesc("Inquiry");
    userInq.setLinkType("link");
    this.menuList.push(userInq);

    test.setLinkId(2);
    test.setHref("test");
    test.setDesc("Test");
    test.setLinkType("link");
    this.menuList.push(test);

    upload.setLinkId(3);
    upload.setHref("upload");
    upload.setDesc("Upload");
    upload.setLinkType("link");
    this.menuList.push(upload);

    testForm.setLinkId(4);
    testForm.setHref("Form");
    testForm.setDesc("Form");
    testForm.setLinkType("link");
    this.menuList.push(testForm);

  }

  public getMenuList(): NavLinks[] {
    return this.menuList;
  }

  public getUserMenuList(tabList:any[]): NavLinks[] {
    this.clearUserMenuList();
    //for (let navLinks of this.menuList) {
      
    /*this.menuList.forEach(function (tabId) {
        tabList.forEach(function (navLinks) {
          if(navLinks.getLinkId()==tabId){

          }
        });
    });*/
    /*tabList.forEach(function (tabId) {
      console.log(this);
      console.log(this.menuList);
      for (let navLinks of this.menuList) {
        if(navLinks.getLinkId()===tabId){
          this.userMenuList.push(navLinks);
          break;
        }
      }
    });*/
    for (let tabId of tabList) {
      let index=0;
      for (let navLinks of this.menuList) {
        if(navLinks.getLinkId()===tabId){
          this.userMenuList.push(navLinks);
          break;
        }
      }
    }
    return this.userMenuList;
  }

  public setMenu(menuListVal: NavLinks[]): void {
   this.menuList = menuListVal;
  }

  public clearAll(): void{
    this.menuList = this.menuList.splice(0,this.menuList.length);
    this.userMenuList = this.userMenuList.splice(0,this.userMenuList.length);
  }

  public clearUserMenuList(): void{
    this.userMenuList = this.userMenuList.splice(0,this.userMenuList.length);
  }

}
