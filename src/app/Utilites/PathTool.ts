import {environment} from '../../environments/environment'

export const MyDomainName = environment.production ? 'FinalUrl.com' : 'https://localhost:44345';
export const ProductImagePath = MyDomainName + '/images/products/origin/';
