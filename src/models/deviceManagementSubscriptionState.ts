/**
 * Tenant mobile device management subscription state.
 */
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
