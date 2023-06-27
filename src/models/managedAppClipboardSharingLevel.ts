/**
 * Represents the level to which the device's clipboard may be shared between apps
 */
export enum ManagedAppClipboardSharingLevel {
    /** Sharing is allowed between all apps, managed or not */
    AllApps = "allApps",
    /** Sharing is allowed between all managed apps with paste in enabled */
    ManagedAppsWithPasteIn = "managedAppsWithPasteIn",
    /** Sharing is allowed between all managed apps */
    ManagedApps = "managedApps",
    /** Sharing between apps is disabled */
    Blocked = "blocked",
}
