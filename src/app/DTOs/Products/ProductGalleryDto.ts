export class  ProductGalleryDto{
  constructor(
    public id : number,
    public createDate : Date,
    public productId : number,
    public image : string
  ) {
  }
}
