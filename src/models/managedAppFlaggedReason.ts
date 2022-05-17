/** Provides operations to manage the deviceAppManagement singleton. */
export enum ManagedAppFlaggedReason {
    /** No issue. */
    None = "none",
    /** The app registration is running on a rooted/unlocked device. */
    RootedDevice = "rootedDevice",
}
