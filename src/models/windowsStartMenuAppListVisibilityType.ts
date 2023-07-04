/**
 * Type of start menu app list visibility.
 */
export enum WindowsStartMenuAppListVisibilityType {
    /** User defined. Default value. */
    UserDefined = "userDefined",
    /** Collapse the app list on the start menu. */
    Collapse = "collapse",
    /** Removes the app list entirely from the start menu. */
    Remove = "remove",
    /** Disables the corresponding toggle (Collapse or Remove) in the Settings app. */
    DisableSettingsApp = "disableSettingsApp",
}
