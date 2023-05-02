import {RoleAssignment} from './roleAssignment';
import {RoleDefinition} from './roleDefinition';
import {RolePermission} from './rolePermission';
import {serializeEntity} from './serializeEntity';
import {serializeRoleAssignment} from './serializeRoleAssignment';
import {serializeRolePermission} from './serializeRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleDefinition(writer: SerializationWriter, roleDefinition: RoleDefinition | undefined = {} as RoleDefinition) : void {
        serializeEntity(writer, roleDefinition)
        writer.writeStringValue("description", roleDefinition.description);
        writer.writeStringValue("displayName", roleDefinition.displayName);
        writer.writeBooleanValue("isBuiltIn", roleDefinition.isBuiltIn);
        writer.writeCollectionOfObjectValues<RoleAssignment>("roleAssignments", roleDefinition.roleAssignments, serializeRoleAssignment);
        writer.writeCollectionOfObjectValues<RolePermission>("rolePermissions", roleDefinition.rolePermissions, serializeRolePermission);
}
