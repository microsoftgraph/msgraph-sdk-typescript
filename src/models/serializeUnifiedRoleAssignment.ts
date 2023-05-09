import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignment(writer: SerializationWriter, unifiedRoleAssignment: UnifiedRoleAssignment | undefined = {} as UnifiedRoleAssignment) : void {
        serializeEntity(writer, unifiedRoleAssignment)
        writer.writeObjectValue<AppScope>("appScope", unifiedRoleAssignment.appScope, serializeAppScope);
        writer.writeStringValue("appScopeId", unifiedRoleAssignment.appScopeId);
        writer.writeStringValue("condition", unifiedRoleAssignment.condition);
        writer.writeObjectValue<DirectoryObject>("directoryScope", unifiedRoleAssignment.directoryScope, serializeDirectoryObject);
        writer.writeStringValue("directoryScopeId", unifiedRoleAssignment.directoryScopeId);
        writer.writeObjectValue<DirectoryObject>("principal", unifiedRoleAssignment.principal, serializeDirectoryObject);
        writer.writeStringValue("principalId", unifiedRoleAssignment.principalId);
        writer.writeObjectValue<UnifiedRoleDefinition>("roleDefinition", unifiedRoleAssignment.roleDefinition, serializeUnifiedRoleDefinition);
        writer.writeStringValue("roleDefinitionId", unifiedRoleAssignment.roleDefinitionId);
}
