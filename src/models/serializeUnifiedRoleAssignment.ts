import { type AppScope } from './appScope';
import { type DirectoryObject } from './directoryObject';
import { serializeAppScope } from './serializeAppScope';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { serializeEntity } from './serializeEntity';
import { serializeUnifiedRoleDefinition } from './serializeUnifiedRoleDefinition';
import { type UnifiedRoleAssignment } from './unifiedRoleAssignment';
import { type UnifiedRoleDefinition } from './unifiedRoleDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
