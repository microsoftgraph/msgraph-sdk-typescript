/**
 * Android Work Profile default app permission policy type.
 */
export enum AndroidWorkProfileDefaultAppPermissionPolicyType {
    /** Device default value, no intent. */
    DeviceDefault = "deviceDefault",
    /** Prompt. */
    Prompt = "prompt",
    /** Auto grant. */
    AutoGrant = "autoGrant",
    /** Auto deny. */
    AutoDeny = "autoDeny",
}
