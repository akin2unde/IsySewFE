import { BaseEntity } from "./BaseEntity"
import { StatusEnum } from "./StatusEnum"

export class Key extends BaseEntity {
  email = ""
  password = ""
  status = StatusEnum.Active
}