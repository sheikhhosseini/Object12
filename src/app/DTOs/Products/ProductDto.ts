export class ProductDto{
  constructor(
    public id : number,
    public createDate : Date,
    public productName : string,
    public price : number,
    public shortDescription : string,
    public description : string,
    public image : string,
    public isExist : boolean,
    public isSpecial : boolean,
  ) {
  }
}
