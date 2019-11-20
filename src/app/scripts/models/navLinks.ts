export class NavLinks {

    private linkId: number
    private href:string;
    private linkType:string;
    private desc:string;

    public getLinkType(): string{
        return this.linkType;
    }
    public setLinkType(linkTypeVal:string): void{
        this.linkType = linkTypeVal;
    }

    public getDesc(): string{
        return this.desc;
    }
    public setDesc(descVal:string): void{
        this.desc = descVal;
    }

    public getLinkId(): number{
        return this.linkId;
    }
    public setLinkId(linkIdVal:number): void{
        this.linkId = linkIdVal;
    }

    public getHref(): string{
        return this.href;
    }
    public setHref(hrefVal:string): void{
        this.href = hrefVal;
    }

}