/** Provides operations to manage the admin singleton. */
export enum ConnectionState {
    Draft = "draft",
    Ready = "ready",
    Obsolete = "obsolete",
    LimitExceeded = "limitExceeded",
    UnknownFutureValue = "unknownFutureValue",
}
