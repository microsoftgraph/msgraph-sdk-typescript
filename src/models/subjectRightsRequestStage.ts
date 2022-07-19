/** Provides operations to manage the admin singleton. */
export enum SubjectRightsRequestStage {
    ContentRetrieval = "contentRetrieval",
    ContentReview = "contentReview",
    GenerateReport = "generateReport",
    ContentDeletion = "contentDeletion",
    CaseResolved = "caseResolved",
    ContentEstimate = "contentEstimate",
    UnknownFutureValue = "unknownFutureValue",
}
