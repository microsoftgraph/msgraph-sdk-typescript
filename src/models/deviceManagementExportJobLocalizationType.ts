/** Provides operations to manage the deviceManagement singleton. */
export enum DeviceManagementExportJobLocalizationType {
    /** Configures the export job to expose localized values as an additional column */
    LocalizedValuesAsAdditionalColumn = "localizedValuesAsAdditionalColumn",
    /** Configures the export job to replace enumerable values with their localized values */
    ReplaceLocalizableValues = "replaceLocalizableValues",
}
