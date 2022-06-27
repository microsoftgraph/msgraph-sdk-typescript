/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export enum ComplianceStatus {
    Unknown = "unknown",
    NotApplicable = "notApplicable",
    Compliant = "compliant",
    Remediated = "remediated",
    NonCompliant = "nonCompliant",
    Error_escaped = "error",
    Conflict = "conflict",
    NotAssigned = "notAssigned",
}
