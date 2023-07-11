/**
 * Possible values for welcome screen meeting information.
 */
export enum WelcomeScreenMeetingInformation {
    /** User Defined, default value, no intent. */
    UserDefined = "userDefined",
    /** Show organizer and time only. */
    ShowOrganizerAndTimeOnly = "showOrganizerAndTimeOnly",
    /** Show organizer, time and subject (subject is hidden for private meetings). */
    ShowOrganizerAndTimeAndSubject = "showOrganizerAndTimeAndSubject",
}
