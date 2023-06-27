/**
 * Compliance state.
 */
export enum ComplianceState {
    /** Unknown. */
    Unknown = "unknown",
    /** Compliant. */
    Compliant = "compliant",
    /** Device is non-compliant and is blocked from corporate resources. */
    Noncompliant = "noncompliant",
    /** Conflict with other rules. */
    Conflict = "conflict",
    /** Error. */
    ErrorEscaped = "error",
    /** Device is non-compliant but still has access to corporate resources */
    InGracePeriod = "inGracePeriod",
    /** Managed by Config Manager */
    ConfigManager = "configManager",
}
