/** Provides operations to manage the collection of application entities. */
export enum SharedPCAccountDeletionPolicyType {
    /** Delete immediately. */
    Immediate = "immediate",
    /** Delete at disk space threshold. */
    DiskSpaceThreshold = "diskSpaceThreshold",
    /** Delete at disk space threshold or inactive threshold. */
    DiskSpaceThresholdOrInactiveThreshold = "diskSpaceThresholdOrInactiveThreshold",
}
