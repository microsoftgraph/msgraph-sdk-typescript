/** Provides operations to manage the admin singleton. */
export enum PrintTaskProcessingState {
    Pending = "pending",
    Processing = "processing",
    Completed = "completed",
    Aborted = "aborted",
    UnknownFutureValue = "unknownFutureValue",
}
