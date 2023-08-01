import type {RoleAssignment} from './roleAssignment';
import type {RoleDefinition} from './roleDefinition';
import {serializeEntity} from './serializeEntity';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleAssignment(writer: SerializationWriter, roleAssignment: RoleAssignment | undefined = {} as RoleAssignment) : void {
        serializeEntity(writer, roleAssignment)
        writer.writeStringValue("description", roleAssignment.description);
        writer.writeStringValue("displayName", roleAssignment.displayName);
        writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", roleAssignment.resourceScopes);
        writer.writeObjectValue<RoleDefinition>("roleDefinition", roleAssignment.roleDefinition, serializeRoleDefinition);
}
