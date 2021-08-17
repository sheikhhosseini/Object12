export class OrderBasketDto {
  constructor(
    public title : string,
    public image : string,
    public price : number,
    public count : number
  ) {
  }
}
