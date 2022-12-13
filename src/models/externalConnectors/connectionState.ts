/** Provides operations to manage the appCatalogs singleton. */
export enum ConnectionState {
    Draft = "draft",
    Ready = "ready",
    Obsolete = "obsolete",
    LimitExceeded = "limitExceeded",
    UnknownFutureValue = "unknownFutureValue",
}
