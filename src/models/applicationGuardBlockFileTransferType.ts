/**
 * Possible values for applicationGuardBlockFileTransfer
 */
export enum ApplicationGuardBlockFileTransferType {
    /** Not Configured */
    NotConfigured = "notConfigured",
    /** Block clipboard to transfer Image and Text file */
    BlockImageAndTextFile = "blockImageAndTextFile",
    /** Block clipboard to transfer Image file */
    BlockImageFile = "blockImageFile",
    /** Neither of text file or image file is blocked from transferring */
    BlockNone = "blockNone",
    /** Block clipboard to transfer Text file */
    BlockTextFile = "blockTextFile",
}
