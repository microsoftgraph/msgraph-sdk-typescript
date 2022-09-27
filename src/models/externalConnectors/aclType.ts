/** Provides operations to manage the admin singleton. */
export enum AclType {
    User = "user",
    Group = "group",
    Everyone = "everyone",
    EveryoneExceptGuests = "everyoneExceptGuests",
    ExternalGroup = "externalGroup",
    UnknownFutureValue = "unknownFutureValue",
}
