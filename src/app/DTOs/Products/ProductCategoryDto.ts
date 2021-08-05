export class ProductCategoryDto{
  constructor(
  public id: number,
  public createDate: Date,
  public isDelete: boolean,
  public lastUpdateDate: Date,
  public parentId: number,
  public productSelectedCategories: number,
  public title: string,
  public urlTitle: string

) {
  }
}
