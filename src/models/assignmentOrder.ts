
export interface AssignmentOrder{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within a user flow. */
    order?:string[] | undefined;
}
