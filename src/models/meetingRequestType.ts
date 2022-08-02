/** Provides operations to manage the admin singleton. */
export enum MeetingRequestType {
    None = "none",
    NewMeetingRequest = "newMeetingRequest",
    FullUpdate = "fullUpdate",
    InformationalUpdate = "informationalUpdate",
    SilentUpdate = "silentUpdate",
    Outdated = "outdated",
    PrincipalWantsCopy = "principalWantsCopy",
}
