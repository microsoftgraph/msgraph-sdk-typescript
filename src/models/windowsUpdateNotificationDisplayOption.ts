/**
 * Windows Update Notification Display Options
 */
export enum WindowsUpdateNotificationDisplayOption {
    /** Not configured */
    NotConfigured = "notConfigured",
    /** Use the default Windows Update notifications. */
    DefaultNotifications = "defaultNotifications",
    /** Turn off all notifications, excluding restart warnings. */
    RestartWarningsOnly = "restartWarningsOnly",
    /** Turn off all notifications, including restart warnings. */
    DisableAllNotifications = "disableAllNotifications",
    /** Evolvable enum member */
    UnknownFutureValue = "unknownFutureValue",
}
