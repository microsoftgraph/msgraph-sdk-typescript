import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DirectoryObject} from './directoryObject';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleScheduleInstanceBase(unifiedRoleScheduleInstanceBase: UnifiedRoleScheduleInstanceBase | undefined = {} as UnifiedRoleScheduleInstanceBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleScheduleInstanceBase),
        "appScope": n => { unifiedRoleScheduleInstanceBase.appScope = n.getObjectValue<AppScope>(createAppScopeFromDiscriminatorValue); },
        "appScopeId": n => { unifiedRoleScheduleInstanceBase.appScopeId = n.getStringValue(); },
        "directoryScope": n => { unifiedRoleScheduleInstanceBase.directoryScope = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "directoryScopeId": n => { unifiedRoleScheduleInstanceBase.directoryScopeId = n.getStringValue(); },
        "principal": n => { unifiedRoleScheduleInstanceBase.principal = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "principalId": n => { unifiedRoleScheduleInstanceBase.principalId = n.getStringValue(); },
        "roleDefinition": n => { unifiedRoleScheduleInstanceBase.roleDefinition = n.getObjectValue<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
        "roleDefinitionId": n => { unifiedRoleScheduleInstanceBase.roleDefinitionId = n.getStringValue(); },
    }
}
