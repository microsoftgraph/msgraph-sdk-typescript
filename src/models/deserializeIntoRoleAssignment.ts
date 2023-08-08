import {createRoleDefinitionFromDiscriminatorValue} from './createRoleDefinitionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {RoleAssignment} from './roleAssignment';
import type {RoleDefinition} from './roleDefinition';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleAssignment(roleAssignment: RoleAssignment | undefined = {} as RoleAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(roleAssignment),
        "description": n => { roleAssignment.description = n.getStringValue(); },
        "displayName": n => { roleAssignment.displayName = n.getStringValue(); },
        "resourceScopes": n => { roleAssignment.resourceScopes = n.getCollectionOfPrimitiveValues<string>(); },
        "roleDefinition": n => { roleAssignment.roleDefinition = n.getObjectValue<RoleDefinition>(createRoleDefinitionFromDiscriminatorValue); },
    }
}
