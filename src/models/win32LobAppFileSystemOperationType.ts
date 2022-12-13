/** Provides operations to manage the deviceAppManagement singleton. */
export enum Win32LobAppFileSystemOperationType {
    /** Not configured. */
    NotConfigured = "notConfigured",
    /** Whether the specified file or folder exists. */
    Exists = "exists",
    /** Last modified date. */
    ModifiedDate = "modifiedDate",
    /** Created date. */
    CreatedDate = "createdDate",
    /** Version value type. */
    Version = "version",
    /** Size detection type. */
    SizeInMB = "sizeInMB",
}
