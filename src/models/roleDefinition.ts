import {Entity} from './entity';
import {RoleAssignment} from './roleAssignment';
import {RolePermission} from './rolePermission';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleDefinition extends Entity, Parsable {
    /**
     * Description of the Role definition.
     */
    description?: string | undefined;
    /**
     * Display Name of the Role definition.
     */
    displayName?: string | undefined;
    /**
     * Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition.
     */
    isBuiltIn?: boolean | undefined;
    /**
     * List of Role assignments for this role definition.
     */
    roleAssignments?: RoleAssignment[] | undefined;
    /**
     * List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission.
     */
    rolePermissions?: RolePermission[] | undefined;
}
