/** Provides operations to manage the admin singleton. */
export enum DataSourceHoldStatus {
    NotApplied = "notApplied",
    Applied = "applied",
    Applying = "applying",
    Removing = "removing",
    Partial = "partial",
    UnknownFutureValue = "unknownFutureValue",
}
