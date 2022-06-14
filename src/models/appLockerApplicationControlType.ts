/** Provides operations to manage the deviceManagement singleton. */
export enum AppLockerApplicationControlType {
    /** Device default value, no Application Control type selected. */
    NotConfigured = "notConfigured",
    /** Enforce Windows component and store apps. */
    EnforceComponentsAndStoreApps = "enforceComponentsAndStoreApps",
    /** Audit Windows component and store apps. */
    AuditComponentsAndStoreApps = "auditComponentsAndStoreApps",
    /** Enforce Windows components, store apps and smart locker. */
    EnforceComponentsStoreAppsAndSmartlocker = "enforceComponentsStoreAppsAndSmartlocker",
    /** Audit Windows components, store apps and smart locker​. */
    AuditComponentsStoreAppsAndSmartlocker = "auditComponentsStoreAppsAndSmartlocker",
}
