/**
 * Possible values for WIP Protection enforcement levels
 */
export enum WindowsInformationProtectionEnforcementLevel {
    /** No protection enforcement */
    NoProtection = "noProtection",
    /** Encrypt and Audit only */
    EncryptAndAuditOnly = "encryptAndAuditOnly",
    /** Encrypt, Audit and Prompt */
    EncryptAuditAndPrompt = "encryptAuditAndPrompt",
    /** Encrypt, Audit and Block */
    EncryptAuditAndBlock = "encryptAuditAndBlock",
}
