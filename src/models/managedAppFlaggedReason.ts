/**
 * The reason for which a user has been flagged
 */
export enum ManagedAppFlaggedReason {
    /** No issue. */
    None = "none",
    /** The app registration is running on a rooted/unlocked device. */
    RootedDevice = "rootedDevice",
}
