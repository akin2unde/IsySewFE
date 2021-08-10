import { BaseEntity } from "./BaseEntity"
import { TagType } from "./TagType"

export class Tag extends BaseEntity {
  name = ""
  description = ""
  tagType = TagType.Category
}