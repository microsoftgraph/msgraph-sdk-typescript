/** Provides operations to manage the appCatalogs singleton. */
export enum StagedFeatureName {
    PassthroughAuthentication = "passthroughAuthentication",
    SeamlessSso = "seamlessSso",
    PasswordHashSync = "passwordHashSync",
    EmailAsAlternateId = "emailAsAlternateId",
    UnknownFutureValue = "unknownFutureValue",
    CertificateBasedAuthentication = "certificateBasedAuthentication",
    MultiFactorAuthentication = "multiFactorAuthentication",
}
