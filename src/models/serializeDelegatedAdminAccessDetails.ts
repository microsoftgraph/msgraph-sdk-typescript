import {DelegatedAdminAccessDetails} from './delegatedAdminAccessDetails';
import {serializeUnifiedRole} from './serializeUnifiedRole';
import {UnifiedRole} from './unifiedRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminAccessDetails(delegatedAdminAccessDetails: DelegatedAdminAccessDetails | undefined = {} as DelegatedAdminAccessDetails, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", delegatedAdminAccessDetails.odataType);
        writer.writeCollectionOfObjectValues<UnifiedRole>("unifiedRoles", delegatedAdminAccessDetails.unifiedRoles, serializeUnifiedRole);
        writer.writeAdditionalData(delegatedAdminAccessDetails.additionalData);
}
