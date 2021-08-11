import { BaseEntity } from "./BaseEntity"
import { ReviewType } from "./ReviewType"

export class Review extends BaseEntity {
  userId = ""
  description = ""
  targetCode = ""
  rating = 0
  reviewType = ReviewType.Product
}
