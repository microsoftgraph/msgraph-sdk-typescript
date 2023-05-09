import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleScheduleBase(writer: SerializationWriter, unifiedRoleScheduleBase: UnifiedRoleScheduleBase | undefined = {} as UnifiedRoleScheduleBase) : void {
        serializeEntity(writer, unifiedRoleScheduleBase)
        writer.writeObjectValue<AppScope>("appScope", unifiedRoleScheduleBase.appScope, serializeAppScope);
        writer.writeStringValue("appScopeId", unifiedRoleScheduleBase.appScopeId);
        writer.writeDateValue("createdDateTime", unifiedRoleScheduleBase.createdDateTime);
        writer.writeStringValue("createdUsing", unifiedRoleScheduleBase.createdUsing);
        writer.writeObjectValue<DirectoryObject>("directoryScope", unifiedRoleScheduleBase.directoryScope, serializeDirectoryObject);
        writer.writeStringValue("directoryScopeId", unifiedRoleScheduleBase.directoryScopeId);
        writer.writeDateValue("modifiedDateTime", unifiedRoleScheduleBase.modifiedDateTime);
        writer.writeObjectValue<DirectoryObject>("principal", unifiedRoleScheduleBase.principal, serializeDirectoryObject);
        writer.writeStringValue("principalId", unifiedRoleScheduleBase.principalId);
        writer.writeObjectValue<UnifiedRoleDefinition>("roleDefinition", unifiedRoleScheduleBase.roleDefinition, serializeUnifiedRoleDefinition);
        writer.writeStringValue("roleDefinitionId", unifiedRoleScheduleBase.roleDefinitionId);
        writer.writeStringValue("status", unifiedRoleScheduleBase.status);
}
