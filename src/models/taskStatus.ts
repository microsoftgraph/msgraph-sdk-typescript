/** Provides operations to manage the admin singleton. */
export enum TaskStatus {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Completed = "completed",
    WaitingOnOthers = "waitingOnOthers",
    Deferred = "deferred",
}
