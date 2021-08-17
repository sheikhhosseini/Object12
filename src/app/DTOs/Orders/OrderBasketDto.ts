export class OrderBasketDto {
  constructor(
    public id : number,
    public title : string,
    public image : string,
    public price : number,
    public count : number
  ) {
  }
}
