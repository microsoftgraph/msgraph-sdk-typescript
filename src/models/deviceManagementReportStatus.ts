/**
 * Possible statuses associated with a generated report
 */
export enum DeviceManagementReportStatus {
    /** Report generation status is unknown */
    Unknown = "unknown",
    /** Report generation has not started */
    NotStarted = "notStarted",
    /** Report generation is in progress */
    InProgress = "inProgress",
    /** Report generation is completed */
    Completed = "completed",
    /** Report generation has failed */
    Failed = "failed",
}
