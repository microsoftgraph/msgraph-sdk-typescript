/** Provides operations to manage the appCatalogs singleton. */
export enum InstallState {
    /** Not Applicable. */
    NotApplicable = "notApplicable",
    /** Installed. */
    Installed = "installed",
    /** Failed. */
    Failed = "failed",
    /** Not Installed. */
    NotInstalled = "notInstalled",
    /** Uninstall Failed. */
    UninstallFailed = "uninstallFailed",
    /** Unknown. */
    Unknown = "unknown",
}
