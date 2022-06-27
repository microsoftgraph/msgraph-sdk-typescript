/** Provides operations to manage the auditLogRoot singleton. */
export enum StagedFeatureName {
    PassthroughAuthentication = "passthroughAuthentication",
    SeamlessSso = "seamlessSso",
    PasswordHashSync = "passwordHashSync",
    EmailAsAlternateId = "emailAsAlternateId",
    UnknownFutureValue = "unknownFutureValue",
    CertificateBasedAuthentication = "certificateBasedAuthentication",
    MultiFactorAuthentication = "multiFactorAuthentication",
}
