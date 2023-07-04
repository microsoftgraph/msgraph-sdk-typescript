/**
 * Indicates the package type of an MSI Win32LobApp.
 */
export enum Win32LobAppMsiPackageType {
    /** Indicates a per-machine app package. */
    PerMachine = "perMachine",
    /** Indicates a per-user app package. */
    PerUser = "perUser",
    /** Indicates a dual-purpose app package. */
    DualPurpose = "dualPurpose",
}
