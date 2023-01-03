/** Provides operations to manage the appCatalogs singleton. */
export enum DataSourceHoldStatus {
    NotApplied = "notApplied",
    Applied = "applied",
    Applying = "applying",
    Removing = "removing",
    Partial = "partial",
    UnknownFutureValue = "unknownFutureValue",
}
