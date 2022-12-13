/** Provides operations to manage the appCatalogs singleton. */
export enum TokenIssuerType {
    AzureAD = "AzureAD",
    ADFederationServices = "ADFederationServices",
    UnknownFutureValue = "UnknownFutureValue",
    AzureADBackupAuth = "AzureADBackupAuth",
    ADFederationServicesMFAAdapter = "ADFederationServicesMFAAdapter",
    NPSExtension = "NPSExtension",
}
