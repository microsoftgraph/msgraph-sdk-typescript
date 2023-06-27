/**
 * Possible values for the install intent chosen by the admin.
 */
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
