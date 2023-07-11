/**
 * Type of accounts that are allowed to share the PC.
 */
export enum SharedPCAllowedAccountType {
    /** Only guest accounts. */
    Guest = "guest",
    /** Only domain-joined accounts. */
    Domain = "domain",
}
