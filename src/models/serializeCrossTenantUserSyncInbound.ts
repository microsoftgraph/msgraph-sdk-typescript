import {CrossTenantUserSyncInbound} from './crossTenantUserSyncInbound';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantUserSyncInbound(crossTenantUserSyncInbound: CrossTenantUserSyncInbound | undefined = {} as CrossTenantUserSyncInbound, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isSyncAllowed", crossTenantUserSyncInbound.isSyncAllowed);
        writer.writeStringValue("@odata.type", crossTenantUserSyncInbound.odataType);
        writer.writeAdditionalData(crossTenantUserSyncInbound.additionalData);
}
