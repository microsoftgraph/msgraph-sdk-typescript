import { type UnifiedRole } from './unifiedRole';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRole(unifiedRole: UnifiedRole | undefined = {} as UnifiedRole) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { unifiedRole.odataType = n.getStringValue(); },
        "roleDefinitionId": n => { unifiedRole.roleDefinitionId = n.getStringValue(); },
    }
}
