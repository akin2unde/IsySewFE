import { BaseEntity } from "./BaseEntity"
import { OrderItem } from "./OrderItem"
import { StatusEnum } from "./StatusEnum"

export class Order extends BaseEntity {
  downloadURL = ""
  totalAmount = 0.00
  discount = 0.00
  deliveryFee = 0.00
  items :OrderItem[] = []
  status = StatusEnum.Active
}