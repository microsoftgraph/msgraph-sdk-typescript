import { type UnifiedRolePermission } from './unifiedRolePermission';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRolePermission(writer: SerializationWriter, unifiedRolePermission: UnifiedRolePermission | undefined = {} as UnifiedRolePermission) : void {
        writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", unifiedRolePermission.allowedResourceActions);
        writer.writeStringValue("condition", unifiedRolePermission.condition);
        writer.writeCollectionOfPrimitiveValues<string>("excludedResourceActions", unifiedRolePermission.excludedResourceActions);
        writer.writeStringValue("@odata.type", unifiedRolePermission.odataType);
        writer.writeAdditionalData(unifiedRolePermission.additionalData);
}
