/** Provides operations to manage the collection of agreement entities. */
export enum CallState {
    Incoming = "incoming",
    Establishing = "establishing",
    Established = "established",
    Hold = "hold",
    Transferring = "transferring",
    TransferAccepted = "transferAccepted",
    Redirecting = "redirecting",
    Terminating = "terminating",
    Terminated = "terminated",
    UnknownFutureValue = "unknownFutureValue",
}
