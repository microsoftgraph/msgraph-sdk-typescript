/** Provides operations to manage the collection of agreement entities. */
export enum ConditionalAccessGrantControl {
    Block = "block",
    Mfa = "mfa",
    CompliantDevice = "compliantDevice",
    DomainJoinedDevice = "domainJoinedDevice",
    ApprovedApplication = "approvedApplication",
    CompliantApplication = "compliantApplication",
    PasswordChange = "passwordChange",
    UnknownFutureValue = "unknownFutureValue",
}
