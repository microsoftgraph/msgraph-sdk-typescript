/** Provides operations to manage the admin singleton. */
export enum AllowInvitesFrom {
    None = "none",
    AdminsAndGuestInviters = "adminsAndGuestInviters",
    AdminsGuestInvitersAndAllMembers = "adminsGuestInvitersAndAllMembers",
    Everyone = "everyone",
    UnknownFutureValue = "unknownFutureValue",
}
