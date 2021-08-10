import {environment} from '../../environments/environment'

export const MyDomainName = environment.production ? 'https://sheikhhosseini77.ir' : 'https://localhost:44345';
export const ProductImagePath = MyDomainName + '/images/products/origin/';
export const ProductGalleryImagePath = MyDomainName + '/images/product-galleries/';
