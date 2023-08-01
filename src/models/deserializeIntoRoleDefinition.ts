import {createRoleAssignmentFromDiscriminatorValue} from './createRoleAssignmentFromDiscriminatorValue';
import {createRolePermissionFromDiscriminatorValue} from './createRolePermissionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {RoleAssignment} from './roleAssignment';
import type {RoleDefinition} from './roleDefinition';
import type {RolePermission} from './rolePermission';
import {serializeRoleAssignment} from './serializeRoleAssignment';
import {serializeRolePermission} from './serializeRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleDefinition(roleDefinition: RoleDefinition | undefined = {} as RoleDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(roleDefinition),
        "description": n => { roleDefinition.description = n.getStringValue(); },
        "displayName": n => { roleDefinition.displayName = n.getStringValue(); },
        "isBuiltIn": n => { roleDefinition.isBuiltIn = n.getBooleanValue(); },
        "roleAssignments": n => { roleDefinition.roleAssignments = n.getCollectionOfObjectValues<RoleAssignment>(createRoleAssignmentFromDiscriminatorValue); },
        "rolePermissions": n => { roleDefinition.rolePermissions = n.getCollectionOfObjectValues<RolePermission>(createRolePermissionFromDiscriminatorValue); },
    }
}
