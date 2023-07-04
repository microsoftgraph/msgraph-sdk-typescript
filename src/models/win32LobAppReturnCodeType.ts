/**
 * Indicates the type of return code.
 */
export enum Win32LobAppReturnCodeType {
    /** Failed. */
    Failed = "failed",
    /** Success. */
    Success = "success",
    /** Soft-reboot is required. */
    SoftReboot = "softReboot",
    /** Hard-reboot is required. */
    HardReboot = "hardReboot",
    /** Retry. */
    Retry = "retry",
}
