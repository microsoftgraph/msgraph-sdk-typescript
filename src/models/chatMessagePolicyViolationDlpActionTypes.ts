/** Provides operations to manage the admin singleton. */
export enum ChatMessagePolicyViolationDlpActionTypes {
    None = "none",
    NotifySender = "notifySender",
    BlockAccess = "blockAccess",
    BlockAccessExternal = "blockAccessExternal",
}
