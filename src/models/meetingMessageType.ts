/** Provides operations to manage the admin singleton. */
export enum MeetingMessageType {
    None = "none",
    MeetingRequest = "meetingRequest",
    MeetingCancelled = "meetingCancelled",
    MeetingAccepted = "meetingAccepted",
    MeetingTenativelyAccepted = "meetingTenativelyAccepted",
    MeetingDeclined = "meetingDeclined",
}
