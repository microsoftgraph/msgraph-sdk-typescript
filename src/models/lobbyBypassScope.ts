/** Provides operations to manage the collection of applicationTemplate entities. */
export enum LobbyBypassScope {
    Organizer = "organizer",
    Organization = "organization",
    OrganizationAndFederated = "organizationAndFederated",
    Everyone = "everyone",
    UnknownFutureValue = "unknownFutureValue",
    Invited = "invited",
    OrganizationExcludingGuests = "organizationExcludingGuests",
}
