/** Provides operations to manage the admin singleton. */
export enum UserFlowType {
    SignUp = "signUp",
    SignIn = "signIn",
    SignUpOrSignIn = "signUpOrSignIn",
    PasswordReset = "passwordReset",
    ProfileUpdate = "profileUpdate",
    ResourceOwner = "resourceOwner",
    UnknownFutureValue = "unknownFutureValue",
}
