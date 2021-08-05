import {ProductDto} from "./ProductDto";
import {ProductOrderBy} from "./ProductOrderBy";

export class FilterProductsDto{


  constructor(
  public title: string = '',
  public startPrice: number,
  public endPrice: number,
  public pageId: number,
  public pageCount: number,
  public startPage: number,
  public endPage: number,
  public takeEntity: number,
  public skipEntity: number,
  public activePage: number,
  public orderBy : ProductOrderBy = ProductOrderBy.Default,
  public categories : number[],
  public products: ProductDto[]
  ) {
  }

}
