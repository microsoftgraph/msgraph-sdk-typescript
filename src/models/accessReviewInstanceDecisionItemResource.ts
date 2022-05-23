
export interface AccessReviewInstanceDecisionItemResource{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Display name of the resource */
    displayName?:string | undefined;
    /** Resource ID */
    id?:string | undefined;
    /** Type of resource. Types include: Group, ServicePrincipal, DirectoryRole, AzureRole, AccessPackageAssignmentPolicy. */
    type?:string | undefined;
}
