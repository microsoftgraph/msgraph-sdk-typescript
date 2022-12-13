/** Provides operations to manage the appCatalogs singleton. */
export enum LongRunningOperationStatus {
    NotStarted = "notStarted",
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed",
    UnknownFutureValue = "unknownFutureValue",
}
