import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DirectoryObject} from './directoryObject';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignment(unifiedRoleAssignment: UnifiedRoleAssignment | undefined = {} as UnifiedRoleAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleAssignment),
        "appScope": n => { unifiedRoleAssignment.appScope = n.getObjectValue<AppScope>(createAppScopeFromDiscriminatorValue); },
        "appScopeId": n => { unifiedRoleAssignment.appScopeId = n.getStringValue(); },
        "condition": n => { unifiedRoleAssignment.condition = n.getStringValue(); },
        "directoryScope": n => { unifiedRoleAssignment.directoryScope = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "directoryScopeId": n => { unifiedRoleAssignment.directoryScopeId = n.getStringValue(); },
        "principal": n => { unifiedRoleAssignment.principal = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "principalId": n => { unifiedRoleAssignment.principalId = n.getStringValue(); },
        "roleDefinition": n => { unifiedRoleAssignment.roleDefinition = n.getObjectValue<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
        "roleDefinitionId": n => { unifiedRoleAssignment.roleDefinitionId = n.getStringValue(); },
    }
}
