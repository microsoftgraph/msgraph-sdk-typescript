import { type RoleAssignment } from './roleAssignment';
import { type RoleDefinition } from './roleDefinition';
import { type RolePermission } from './rolePermission';
import { serializeEntity } from './serializeEntity';
import { serializeRoleAssignment } from './serializeRoleAssignment';
import { serializeRolePermission } from './serializeRolePermission';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRoleDefinition(writer: SerializationWriter, roleDefinition: RoleDefinition | undefined = {} as RoleDefinition) : void {
        serializeEntity(writer, roleDefinition)
        writer.writeStringValue("description", roleDefinition.description);
        writer.writeStringValue("displayName", roleDefinition.displayName);
        writer.writeBooleanValue("isBuiltIn", roleDefinition.isBuiltIn);
        writer.writeCollectionOfObjectValues<RoleAssignment>("roleAssignments", roleDefinition.roleAssignments, serializeRoleAssignment);
        writer.writeCollectionOfObjectValues<RolePermission>("rolePermissions", roleDefinition.rolePermissions, serializeRolePermission);
}
