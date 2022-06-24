/** Provides operations to manage the deviceManagement singleton. */
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
