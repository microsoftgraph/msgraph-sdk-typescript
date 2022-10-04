/** Provides operations to manage the collection of agreement entities. */
export enum AuthenticationMethodSignInState {
    NotSupported = "notSupported",
    NotAllowedByPolicy = "notAllowedByPolicy",
    NotEnabled = "notEnabled",
    PhoneNumberNotUnique = "phoneNumberNotUnique",
    Ready = "ready",
    NotConfigured = "notConfigured",
    UnknownFutureValue = "unknownFutureValue",
}
