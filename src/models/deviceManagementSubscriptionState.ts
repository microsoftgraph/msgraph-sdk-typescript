/** Provides operations to manage the deviceManagement singleton. */
export enum DeviceManagementSubscriptionState {
    /** Pending */
    Pending = "pending",
    /** Active */
    Active = "active",
    /** Warning */
    Warning = "warning",
    /** Disabled */
    Disabled = "disabled",
    /** Deleted */
    Deleted = "deleted",
    /** Blocked */
    Blocked = "blocked",
    /** LockedOut */
    LockedOut = "lockedOut",
}
