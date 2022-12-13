/** Provides operations to manage the collection of application entities. */
export enum AccessPackageRequestType {
    NotSpecified = "notSpecified",
    UserAdd = "userAdd",
    UserUpdate = "userUpdate",
    UserRemove = "userRemove",
    AdminAdd = "adminAdd",
    AdminUpdate = "adminUpdate",
    AdminRemove = "adminRemove",
    SystemAdd = "systemAdd",
    SystemUpdate = "systemUpdate",
    SystemRemove = "systemRemove",
    OnBehalfAdd = "onBehalfAdd",
    UnknownFutureValue = "unknownFutureValue",
}
