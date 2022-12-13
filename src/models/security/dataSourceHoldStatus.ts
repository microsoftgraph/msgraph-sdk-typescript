/** Provides operations to manage the collection of applicationTemplate entities. */
export enum DataSourceHoldStatus {
    NotApplied = "notApplied",
    Applied = "applied",
    Applying = "applying",
    Removing = "removing",
    Partial = "partial",
    UnknownFutureValue = "unknownFutureValue",
}
