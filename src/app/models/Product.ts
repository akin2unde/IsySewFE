import { BaseEntity } from "./BaseEntity"
import { ProductType } from "./ProductType"
import { Image } from "./Image"

export class Product extends BaseEntity {
  name = ""
  code = ""
  description = ""
  summary = ""
  price = 0.00
  specialPrice = 0.00
  rating = 0.00
  productType = ProductType.Digital
  images: Image[] = [];
  categories: String[] = [];
  reviewCount = 0
  isHighlight=false;
}
