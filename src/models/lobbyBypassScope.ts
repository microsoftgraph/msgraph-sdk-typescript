/** Provides operations to manage the admin singleton. */
export enum LobbyBypassScope {
    Organizer = "organizer",
    Organization = "organization",
    OrganizationAndFederated = "organizationAndFederated",
    Everyone = "everyone",
    UnknownFutureValue = "unknownFutureValue",
    Invited = "invited",
    OrganizationExcludingGuests = "organizationExcludingGuests",
}
