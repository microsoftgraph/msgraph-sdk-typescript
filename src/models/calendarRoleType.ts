/** Provides operations to manage the appCatalogs singleton. */
export enum CalendarRoleType {
    None = "none",
    FreeBusyRead = "freeBusyRead",
    LimitedRead = "limitedRead",
    Read = "read",
    Write = "write",
    DelegateWithoutPrivateEventAccess = "delegateWithoutPrivateEventAccess",
    DelegateWithPrivateEventAccess = "delegateWithPrivateEventAccess",
    Custom = "custom",
}
