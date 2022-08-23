/** Provides operations to manage the deviceManagement singleton. */
export enum PrereleaseFeatures {
    /** User Defined, default value, no intent. */
    UserDefined = "userDefined",
    /** Settings only pre-release features. */
    SettingsOnly = "settingsOnly",
    /** Settings and experimentations pre-release features. */
    SettingsAndExperimentations = "settingsAndExperimentations",
    /** Pre-release features not allowed. */
    NotAllowed = "notAllowed",
}
