/** Provides operations to manage the collection of agreementAcceptance entities. */
export enum PrintJobStateDetail {
    UploadPending = "uploadPending",
    Transforming = "transforming",
    CompletedSuccessfully = "completedSuccessfully",
    CompletedWithWarnings = "completedWithWarnings",
    CompletedWithErrors = "completedWithErrors",
    ReleaseWait = "releaseWait",
    Interpreting = "interpreting",
    UnknownFutureValue = "unknownFutureValue",
}
