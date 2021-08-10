import {ProductDto} from "./ProductDto";
import {ProductGalleryDto} from "./ProductGalleryDto";

export class ProductDetailDto{
  constructor(
    public product : ProductDto,
    public galleries : ProductGalleryDto[]
  ) {
  }
}
