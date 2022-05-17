/** Provides operations to call the targetApps method. */
export enum TargetedManagedAppGroupType {
    /** Target the collection of apps manually selected by the admin. */
    SelectedPublicApps = "selectedPublicApps",
    /** Target the core set of Microsoft apps (Office, Edge, etc). */
    AllCoreMicrosoftApps = "allCoreMicrosoftApps",
    /** Target all apps with Microsoft as publisher. */
    AllMicrosoftApps = "allMicrosoftApps",
    /** Target all apps with an available assignment. */
    AllApps = "allApps",
}
