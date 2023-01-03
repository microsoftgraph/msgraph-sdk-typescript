/** Provides operations to manage the appCatalogs singleton. */
export enum TaskStatus {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Completed = "completed",
    WaitingOnOthers = "waitingOnOthers",
    Deferred = "deferred",
}
