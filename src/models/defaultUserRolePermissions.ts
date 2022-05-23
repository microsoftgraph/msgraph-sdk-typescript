
export interface DefaultUserRolePermissions{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Indicates whether the default user role can create applications. */
    allowedToCreateApps?:boolean | undefined;
    /** Indicates whether the default user role can create security groups. */
    allowedToCreateSecurityGroups?:boolean | undefined;
    /** Indicates whether the default user role can read other users. */
    allowedToReadOtherUsers?:boolean | undefined;
    /** Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list indicates user consent to apps is disabled. */
    permissionGrantPoliciesAssigned?:string[] | undefined;
}
