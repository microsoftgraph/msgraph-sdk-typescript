/** Provides operations to manage the deviceManagement singleton. */
export enum DeviceManagementPartnerTenantState {
    /** Partner state is unknown. */
    Unknown = "unknown",
    /** Partner is unavailable. */
    Unavailable = "unavailable",
    /** Partner is enabled. */
    Enabled = "enabled",
    /** Partner connection is terminated. */
    Terminated = "terminated",
    /** Partner messages are rejected. */
    Rejected = "rejected",
    /** Partner is unresponsive. */
    Unresponsive = "unresponsive",
}
