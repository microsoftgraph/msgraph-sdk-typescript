/** Provides operations to manage the appCatalogs singleton. */
export enum FederatedIdpMfaBehavior {
    AcceptIfMfaDoneByFederatedIdp = "acceptIfMfaDoneByFederatedIdp",
    EnforceMfaByFederatedIdp = "enforceMfaByFederatedIdp",
    RejectMfaByFederatedIdp = "rejectMfaByFederatedIdp",
    UnknownFutureValue = "unknownFutureValue",
}
