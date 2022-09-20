/** Provides operations to manage the collection of agreementAcceptance entities. */
export enum UserFlowType {
    SignUp = "signUp",
    SignIn = "signIn",
    SignUpOrSignIn = "signUpOrSignIn",
    PasswordReset = "passwordReset",
    ProfileUpdate = "profileUpdate",
    ResourceOwner = "resourceOwner",
    UnknownFutureValue = "unknownFutureValue",
}
