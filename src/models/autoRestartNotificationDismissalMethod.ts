/**
 * Auto restart required notification dismissal method
 */
export enum AutoRestartNotificationDismissalMethod {
    /** Not configured */
    NotConfigured = "notConfigured",
    /** Auto dismissal Indicates that the notification is automatically dismissed without user intervention */
    Automatic = "automatic",
    /** User dismissal. Allows the user to dismiss the notification */
    User = "user",
    /** Evolvable enum member */
    UnknownFutureValue = "unknownFutureValue",
}
