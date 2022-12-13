/** Provides operations to manage the collection of applicationTemplate entities. */
export enum DeviceManagementPartnerAppType {
    /** Partner App type is unknown. */
    Unknown = "unknown",
    /** Partner App is Single tenant in AAD. */
    SingleTenantApp = "singleTenantApp",
    /** Partner App is Multi tenant in AAD. */
    MultiTenantApp = "multiTenantApp",
}
