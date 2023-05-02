import {UnifiedRole} from './unifiedRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRole(writer: SerializationWriter, unifiedRole: UnifiedRole | undefined = {} as UnifiedRole) : void {
        writer.writeStringValue("@odata.type", unifiedRole.odataType);
        writer.writeStringValue("roleDefinitionId", unifiedRole.roleDefinitionId);
        writer.writeAdditionalData(unifiedRole.additionalData);
}
