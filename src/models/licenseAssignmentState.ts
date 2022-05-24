
export interface LicenseAssignmentState{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The id of the group that assigns this license. If the assignment is a direct-assigned license, this field will be Null. Read-Only. */
    assignedByGroup?:string | undefined;
    /** The service plans that are disabled in this assignment. Read-Only. */
    disabledPlans?:string[] | undefined;
    /** License assignment failure error. If the license is assigned successfully, this field will be Null. Read-Only. The possible values are CountViolation, MutuallyExclusiveViolation, DependencyViolation, ProhibitedInUsageLocationViolation, UniquenessViolation, and Other. For more information on how to identify and resolve license assignment errors see here. */
    error_escaped?:string | undefined;
    /** The timestamp when the state of the license assignment was last updated. */
    lastUpdatedDateTime?:Date | undefined;
    /** The unique identifier for the SKU. Read-Only. */
    skuId?:string | undefined;
    /** Indicate the current state of this assignment. Read-Only. The possible values are Active, ActiveWithError, Disabled, and Error. */
    state?:string | undefined;
}
