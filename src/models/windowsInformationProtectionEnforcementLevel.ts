/** Provides operations to manage the collection of application entities. */
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
