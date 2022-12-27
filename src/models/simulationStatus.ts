/** Provides operations to manage the admin singleton. */
export enum SimulationStatus {
    Unknown = "unknown",
    Draft = "draft",
    Running = "running",
    Scheduled = "scheduled",
    Succeeded = "succeeded",
    Failed = "failed",
    Cancelled = "cancelled",
    Excluded = "excluded",
    UnknownFutureValue = "unknownFutureValue",
}
