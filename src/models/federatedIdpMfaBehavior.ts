/** Provides operations to manage the collection of agreementAcceptance entities. */
export enum FederatedIdpMfaBehavior {
    AcceptIfMfaDoneByFederatedIdp = "acceptIfMfaDoneByFederatedIdp",
    EnforceMfaByFederatedIdp = "enforceMfaByFederatedIdp",
    RejectMfaByFederatedIdp = "rejectMfaByFederatedIdp",
    UnknownFutureValue = "unknownFutureValue",
}
