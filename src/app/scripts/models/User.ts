export class User {

    public serialNo:number;
    public userId:string;
    public userName:string;
    public role:string;

    public getUserId(): string{
        return this.userId;
    }
    public setUserId(userIdVal:string): void{
        this.userId = userIdVal;
    }

    public getUserName(): string{
        return this.userName;
    }
    public setUserName(userNameVal:string): void{
        this.userName = userNameVal;
    }

    public getSerialNo(): number{
        return this.serialNo;
    }
    public setSerialNo(serialNoVal:number): void{
        this.serialNo = serialNoVal;
    }

    public getRole(): string{
        return this.role;
    }
    public setRole(roleVal:string): void{
        this.role = roleVal;
    }

}