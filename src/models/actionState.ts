/** Provides operations to manage the collection of agreement entities. */
export enum ActionState {
    /** Not a valid action state */
    None = "none",
    /** Action is pending */
    Pending = "pending",
    /** Action has been cancelled. */
    Canceled = "canceled",
    /** Action is active. */
    Active = "active",
    /** Action completed without errors. */
    Done = "done",
    /** Action failed */
    Failed = "failed",
    /** Action is not supported. */
    NotSupported = "notSupported",
}
