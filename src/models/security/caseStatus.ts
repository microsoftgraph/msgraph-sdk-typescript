/** Provides operations to manage the collection of application entities. */
export enum CaseStatus {
    Unknown = "unknown",
    Active = "active",
    PendingDelete = "pendingDelete",
    Closing = "closing",
    Closed = "closed",
    ClosedWithError = "closedWithError",
    UnknownFutureValue = "unknownFutureValue",
}
