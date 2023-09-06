import { type DelegatedAdminAccessDetails } from './delegatedAdminAccessDetails';
import { serializeUnifiedRole } from './serializeUnifiedRole';
import { type UnifiedRole } from './unifiedRole';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminAccessDetails(writer: SerializationWriter, delegatedAdminAccessDetails: DelegatedAdminAccessDetails | undefined = {} as DelegatedAdminAccessDetails) : void {
        writer.writeStringValue("@odata.type", delegatedAdminAccessDetails.odataType);
        writer.writeCollectionOfObjectValues<UnifiedRole>("unifiedRoles", delegatedAdminAccessDetails.unifiedRoles, serializeUnifiedRole);
        writer.writeAdditionalData(delegatedAdminAccessDetails.additionalData);
}
