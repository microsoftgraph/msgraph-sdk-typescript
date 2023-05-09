import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleScheduleInstanceBase(writer: SerializationWriter, unifiedRoleScheduleInstanceBase: UnifiedRoleScheduleInstanceBase | undefined = {} as UnifiedRoleScheduleInstanceBase) : void {
        serializeEntity(writer, unifiedRoleScheduleInstanceBase)
        writer.writeObjectValue<AppScope>("appScope", unifiedRoleScheduleInstanceBase.appScope, serializeAppScope);
        writer.writeStringValue("appScopeId", unifiedRoleScheduleInstanceBase.appScopeId);
        writer.writeObjectValue<DirectoryObject>("directoryScope", unifiedRoleScheduleInstanceBase.directoryScope, serializeDirectoryObject);
        writer.writeStringValue("directoryScopeId", unifiedRoleScheduleInstanceBase.directoryScopeId);
        writer.writeObjectValue<DirectoryObject>("principal", unifiedRoleScheduleInstanceBase.principal, serializeDirectoryObject);
        writer.writeStringValue("principalId", unifiedRoleScheduleInstanceBase.principalId);
        writer.writeObjectValue<UnifiedRoleDefinition>("roleDefinition", unifiedRoleScheduleInstanceBase.roleDefinition, serializeUnifiedRoleDefinition);
        writer.writeStringValue("roleDefinitionId", unifiedRoleScheduleInstanceBase.roleDefinitionId);
}
