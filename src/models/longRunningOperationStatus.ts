/** Provides operations to manage the collection of application entities. */
export enum LongRunningOperationStatus {
    NotStarted = "notStarted",
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed",
    UnknownFutureValue = "unknownFutureValue",
}
