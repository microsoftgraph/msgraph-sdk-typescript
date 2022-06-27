/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export enum TokenIssuerType {
    AzureAD = "AzureAD",
    ADFederationServices = "ADFederationServices",
    UnknownFutureValue = "UnknownFutureValue",
    AzureADBackupAuth = "AzureADBackupAuth",
    ADFederationServicesMFAAdapter = "ADFederationServicesMFAAdapter",
    NPSExtension = "NPSExtension",
}
