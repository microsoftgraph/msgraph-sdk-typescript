/** Provides operations to manage the deviceManagement singleton.  */
export enum ComplianceState {
    Unknown = "unknown",
    Compliant = "compliant",
    Noncompliant = "noncompliant",
    Conflict = "conflict",
    Error_escaped = "error_escaped",
    InGracePeriod = "inGracePeriod",
    ConfigManager = "configManager",
}
