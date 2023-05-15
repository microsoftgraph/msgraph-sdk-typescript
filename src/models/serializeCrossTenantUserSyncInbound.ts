import {CrossTenantUserSyncInbound} from './crossTenantUserSyncInbound';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantUserSyncInbound(writer: SerializationWriter, crossTenantUserSyncInbound: CrossTenantUserSyncInbound | undefined = {} as CrossTenantUserSyncInbound) : void {
        writer.writeBooleanValue("isSyncAllowed", crossTenantUserSyncInbound.isSyncAllowed);
        writer.writeStringValue("@odata.type", crossTenantUserSyncInbound.odataType);
        writer.writeAdditionalData(crossTenantUserSyncInbound.additionalData);
}
