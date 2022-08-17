/** Provides operations to manage the admin singleton. */
export enum PrintOperationProcessingState {
    NotStarted = "notStarted",
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed",
    UnknownFutureValue = "unknownFutureValue",
}
