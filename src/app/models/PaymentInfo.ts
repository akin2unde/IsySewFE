import { BaseEntity } from "./BaseEntity"
import { OrderStatus } from "./OrderStatus"

export class PaymentInfo extends BaseEntity {
  refCode = ""
  description = ""
  userId = ""
  errorMsg = ""
  amount = 0.00
  paymentId = ""
  status = OrderStatus.Pending;
  
}
