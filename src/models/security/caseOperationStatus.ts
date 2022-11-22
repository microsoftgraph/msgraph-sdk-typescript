/** Provides operations to manage the admin singleton. */
export enum CaseOperationStatus {
    NotStarted = "notStarted",
    SubmissionFailed = "submissionFailed",
    Running = "running",
    Succeeded = "succeeded",
    PartiallySucceeded = "partiallySucceeded",
    Failed = "failed",
    UnknownFutureValue = "unknownFutureValue",
}
