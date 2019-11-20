import { NavLinks } from './navLinks';


export class Menu {
    private menuList: NavLinks[];

    public getMenuList(): NavLinks[]{
        return this.menuList;
    }
    public setMenuList(menuDataList:NavLinks[]): void{
        this.menuList = menuDataList;
    }
}