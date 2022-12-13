/** Provides operations to manage the collection of application entities. */
export enum FederatedIdpMfaBehavior {
    AcceptIfMfaDoneByFederatedIdp = "acceptIfMfaDoneByFederatedIdp",
    EnforceMfaByFederatedIdp = "enforceMfaByFederatedIdp",
    RejectMfaByFederatedIdp = "rejectMfaByFederatedIdp",
    UnknownFutureValue = "unknownFutureValue",
}
