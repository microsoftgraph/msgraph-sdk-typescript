/** Provides operations to manage the appCatalogs singleton. */
export enum CaseStatus {
    Unknown = "unknown",
    Active = "active",
    PendingDelete = "pendingDelete",
    Closing = "closing",
    Closed = "closed",
    ClosedWithError = "closedWithError",
    UnknownFutureValue = "unknownFutureValue",
}
