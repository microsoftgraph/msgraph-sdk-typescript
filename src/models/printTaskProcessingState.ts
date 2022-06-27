/** Provides operations to manage the auditLogRoot singleton. */
export enum PrintTaskProcessingState {
    Pending = "pending",
    Processing = "processing",
    Completed = "completed",
    Aborted = "aborted",
    UnknownFutureValue = "unknownFutureValue",
}
