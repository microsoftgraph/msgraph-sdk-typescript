import { serializeEntity } from './serializeEntity';
import { serializeUnifiedRolePermission } from './serializeUnifiedRolePermission';
import { type UnifiedRoleDefinition } from './unifiedRoleDefinition';
import { type UnifiedRolePermission } from './unifiedRolePermission';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleDefinition(writer: SerializationWriter, unifiedRoleDefinition: UnifiedRoleDefinition | undefined = {} as UnifiedRoleDefinition) : void {
        serializeEntity(writer, unifiedRoleDefinition)
        writer.writeStringValue("description", unifiedRoleDefinition.description);
        writer.writeStringValue("displayName", unifiedRoleDefinition.displayName);
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinition>("inheritsPermissionsFrom", unifiedRoleDefinition.inheritsPermissionsFrom, serializeUnifiedRoleDefinition);
        writer.writeBooleanValue("isBuiltIn", unifiedRoleDefinition.isBuiltIn);
        writer.writeBooleanValue("isEnabled", unifiedRoleDefinition.isEnabled);
        writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", unifiedRoleDefinition.resourceScopes);
        writer.writeCollectionOfObjectValues<UnifiedRolePermission>("rolePermissions", unifiedRoleDefinition.rolePermissions, serializeUnifiedRolePermission);
        writer.writeStringValue("templateId", unifiedRoleDefinition.templateId);
        writer.writeStringValue("version", unifiedRoleDefinition.version);
}
