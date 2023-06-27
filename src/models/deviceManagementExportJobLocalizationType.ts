/**
 * Configures how the requested export job is localized
 */
export enum DeviceManagementExportJobLocalizationType {
    /** Configures the export job to expose localized values as an additional column */
    LocalizedValuesAsAdditionalColumn = "localizedValuesAsAdditionalColumn",
    /** Configures the export job to replace enumerable values with their localized values */
    ReplaceLocalizableValues = "replaceLocalizableValues",
}
