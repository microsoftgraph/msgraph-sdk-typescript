/** Provides operations to manage the appCatalogs singleton. */
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
