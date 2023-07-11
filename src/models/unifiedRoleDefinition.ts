import {Entity} from './entity';
import {UnifiedRolePermission} from './unifiedRolePermission';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleDefinition extends Entity, Parsable {
    /**
     * The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     */
    description?: string | undefined;
    /**
     * The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq, in).
     */
    displayName?: string | undefined;
    /**
     * Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
     */
    inheritsPermissionsFrom?: UnifiedRoleDefinition[] | undefined;
    /**
     * Flag indicating whether the role definition is part of the default set included in Azure Active Directory (Azure AD) or a custom definition. Read-only. Supports $filter (eq, in).
     */
    isBuiltIn?: boolean | undefined;
    /**
     * Flag indicating whether the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true.
     */
    isEnabled?: boolean | undefined;
    /**
     * List of the scopes or permissions the role definition applies to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment.
     */
    resourceScopes?: string[] | undefined;
    /**
     * List of permissions included in the role. Read-only when isBuiltIn is true. Required.
     */
    rolePermissions?: UnifiedRolePermission[] | undefined;
    /**
     * Custom template identifier that can be set when isBuiltIn is false but is read-only when isBuiltIn is true. This identifier is typically used if one needs an identifier to be the same across different directories.
     */
    templateId?: string | undefined;
    /**
     * Indicates version of the role definition. Read-only when isBuiltIn is true.
     */
    version?: string | undefined;
}
