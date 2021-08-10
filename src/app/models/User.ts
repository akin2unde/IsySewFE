import { BaseEntity } from "./BaseEntity"
import { StatusEnum } from "./StatusEnum"
import { UserTypeEmum } from "./UserTypeEnum"

export class User extends BaseEntity {
  address = ""
  key = ""
  phoneNumber = ""
  country = ""
  ranking = ""
  currency = ""
  fullname = ""
  userType = UserTypeEmum
  status = StatusEnum.Active
}