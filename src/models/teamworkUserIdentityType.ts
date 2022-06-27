/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export enum TeamworkUserIdentityType {
    AadUser = "aadUser",
    OnPremiseAadUser = "onPremiseAadUser",
    AnonymousGuest = "anonymousGuest",
    FederatedUser = "federatedUser",
    PersonalMicrosoftAccountUser = "personalMicrosoftAccountUser",
    SkypeUser = "skypeUser",
    PhoneUser = "phoneUser",
    UnknownFutureValue = "unknownFutureValue",
    EmailUser = "emailUser",
}
