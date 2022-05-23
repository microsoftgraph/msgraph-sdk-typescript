import {Entity} from './entity';
import {UnifiedRolePermission} from './unifiedRolePermission';

export interface UnifiedRoleDefinition extends Entity{
    /** The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true. */
    description?:string | undefined;
    /** The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq and startsWith operators only). */
    displayName?:string | undefined;
    /** Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute. */
    inheritsPermissionsFrom?:UnifiedRoleDefinition[] | undefined;
    /** Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.  Supports $filter (eq operator only). */
    isBuiltIn?:boolean | undefined;
    /** Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true. */
    isEnabled?:boolean | undefined;
    /** List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment */
    resourceScopes?:string[] | undefined;
    /** List of permissions included in the role. Read-only when isBuiltIn is true. Required. */
    rolePermissions?:UnifiedRolePermission[] | undefined;
    /** Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an identifier to be the same across different directories. Read-only when isBuiltIn is true. */
    templateId?:string | undefined;
    /** Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true. */
    version?:string | undefined;
}
