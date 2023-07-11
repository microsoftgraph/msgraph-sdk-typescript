/**
 * Storage locations where managed apps can potentially store their data
 */
export enum ManagedAppDataStorageLocation {
    /** OneDrive for business */
    OneDriveForBusiness = "oneDriveForBusiness",
    /** SharePoint */
    SharePoint = "sharePoint",
    /** Box */
    Box = "box",
    /** Local storage on the device */
    LocalStorage = "localStorage",
}
