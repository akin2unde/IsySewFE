
export abstract class BaseEntity{
    _id = ""
    createdAt: Date = new Date(Date.now())
    updatedAt: Date = new Date(Date.now())
}