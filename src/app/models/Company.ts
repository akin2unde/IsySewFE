import { BaseEntity } from "./BaseEntity"
import { StatusEnum } from "./StatusEnum"

export class Company extends BaseEntity {
  name = ""
  description = ""
  caption = ""
  url = ""
  status = StatusEnum.Active
}
