import { BaseEntity } from "./BaseEntity"
import { CartItem } from "./CartItem"

export class Cart extends BaseEntity {
  UserId = ""
  Amount = 0
  Items :CartItem[] = []
}
