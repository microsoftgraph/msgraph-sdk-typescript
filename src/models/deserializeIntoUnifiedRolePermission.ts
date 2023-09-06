import { type UnifiedRolePermission } from './unifiedRolePermission';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRolePermission(unifiedRolePermission: UnifiedRolePermission | undefined = {} as UnifiedRolePermission) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedResourceActions": n => { unifiedRolePermission.allowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
        "condition": n => { unifiedRolePermission.condition = n.getStringValue(); },
        "excludedResourceActions": n => { unifiedRolePermission.excludedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { unifiedRolePermission.odataType = n.getStringValue(); },
    }
}
