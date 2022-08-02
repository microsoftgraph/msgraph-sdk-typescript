/** Provides operations to manage the admin singleton. */
export enum InstallIntent {
    /** Available install intent. */
    Available = "available",
    /** Required install intent. */
    Required = "required",
    /** Uninstall install intent. */
    Uninstall = "uninstall",
    /** Available without enrollment install intent. */
    AvailableWithoutEnrollment = "availableWithoutEnrollment",
}
