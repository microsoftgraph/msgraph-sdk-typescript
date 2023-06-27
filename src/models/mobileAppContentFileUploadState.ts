/**
 * Contains properties for upload request states.
 */
export enum MobileAppContentFileUploadState {
    Success = "success",
    TransientError = "transientError",
    ErrorEscaped = "error",
    Unknown = "unknown",
    AzureStorageUriRequestSuccess = "azureStorageUriRequestSuccess",
    AzureStorageUriRequestPending = "azureStorageUriRequestPending",
    AzureStorageUriRequestFailed = "azureStorageUriRequestFailed",
    AzureStorageUriRequestTimedOut = "azureStorageUriRequestTimedOut",
    AzureStorageUriRenewalSuccess = "azureStorageUriRenewalSuccess",
    AzureStorageUriRenewalPending = "azureStorageUriRenewalPending",
    AzureStorageUriRenewalFailed = "azureStorageUriRenewalFailed",
    AzureStorageUriRenewalTimedOut = "azureStorageUriRenewalTimedOut",
    CommitFileSuccess = "commitFileSuccess",
    CommitFilePending = "commitFilePending",
    CommitFileFailed = "commitFileFailed",
    CommitFileTimedOut = "commitFileTimedOut",
}
