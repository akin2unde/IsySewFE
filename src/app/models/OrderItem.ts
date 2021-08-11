import { BaseEntity } from "./BaseEntity"
import { Image } from "./Image"
import { ProductType } from "./ProductType"
import { TagType } from "./TagType"

export class OrderItem extends BaseEntity {
  productCode = ""
  price = 0.00
  productType = ProductType
  productImage = Image;
  tagType = TagType
}
