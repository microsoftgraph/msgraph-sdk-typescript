
export interface UnifiedRolePermission{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Set of tasks that can be performed on a resource. */
    allowedResourceActions?:string[] | undefined;
    /** Optional constraints that must be met for the permission to be effective. */
    condition?:string | undefined;
    /** Set of tasks that may not be performed on a resource. Not yet supported. */
    excludedResourceActions?:string[] | undefined;
}
