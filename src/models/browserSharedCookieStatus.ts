export enum BrowserSharedCookieStatus {
    /** A sharedcookie that has been published */
    Published = "published",
    /** A sharedcookie that has been added pending publish */
    PendingAdd = "pendingAdd",
    /** A sharedcookie that has been edited pending publish */
    PendingEdit = "pendingEdit",
    /** A sharedcookie that has been deleted pending publish */
    PendingDelete = "pendingDelete",
    /** Placeholder for evolvable enum, but this enum is never returned to the caller, so it shouldn't be necessary. */
    UnknownFutureValue = "unknownFutureValue",
}
// tslint:enable
// eslint-enable
