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
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleScheduleBase(unifiedRoleScheduleBase: UnifiedRoleScheduleBase | undefined = {} as UnifiedRoleScheduleBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleScheduleBase),
        "appScope": n => { unifiedRoleScheduleBase.appScope = n.getObjectValue<AppScope>(createAppScopeFromDiscriminatorValue); },
        "appScopeId": n => { unifiedRoleScheduleBase.appScopeId = n.getStringValue(); },
        "createdDateTime": n => { unifiedRoleScheduleBase.createdDateTime = n.getDateValue(); },
        "createdUsing": n => { unifiedRoleScheduleBase.createdUsing = n.getStringValue(); },
        "directoryScope": n => { unifiedRoleScheduleBase.directoryScope = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "directoryScopeId": n => { unifiedRoleScheduleBase.directoryScopeId = n.getStringValue(); },
        "modifiedDateTime": n => { unifiedRoleScheduleBase.modifiedDateTime = n.getDateValue(); },
        "principal": n => { unifiedRoleScheduleBase.principal = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "principalId": n => { unifiedRoleScheduleBase.principalId = n.getStringValue(); },
        "roleDefinition": n => { unifiedRoleScheduleBase.roleDefinition = n.getObjectValue<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
        "roleDefinitionId": n => { unifiedRoleScheduleBase.roleDefinitionId = n.getStringValue(); },
        "status": n => { unifiedRoleScheduleBase.status = n.getStringValue(); },
    }
}
