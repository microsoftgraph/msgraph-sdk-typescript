import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRolePermissionFromDiscriminatorValue} from './createUnifiedRolePermissionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {serializeUnifiedRolePermission} from './serializeUnifiedRolePermission';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRolePermission} from './unifiedRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleDefinition(unifiedRoleDefinition: UnifiedRoleDefinition | undefined = {} as UnifiedRoleDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleDefinition),
        "description": n => { unifiedRoleDefinition.description = n.getStringValue(); },
        "displayName": n => { unifiedRoleDefinition.displayName = n.getStringValue(); },
        "inheritsPermissionsFrom": n => { unifiedRoleDefinition.inheritsPermissionsFrom = n.getCollectionOfObjectValues<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
        "isBuiltIn": n => { unifiedRoleDefinition.isBuiltIn = n.getBooleanValue(); },
        "isEnabled": n => { unifiedRoleDefinition.isEnabled = n.getBooleanValue(); },
        "resourceScopes": n => { unifiedRoleDefinition.resourceScopes = n.getCollectionOfPrimitiveValues<string>(); },
        "rolePermissions": n => { unifiedRoleDefinition.rolePermissions = n.getCollectionOfObjectValues<UnifiedRolePermission>(createUnifiedRolePermissionFromDiscriminatorValue); },
        "templateId": n => { unifiedRoleDefinition.templateId = n.getStringValue(); },
        "version": n => { unifiedRoleDefinition.version = n.getStringValue(); },
    }
}
