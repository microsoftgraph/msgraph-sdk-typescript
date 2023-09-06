import { type CrossTenantIdentitySyncPolicyPartner } from './crossTenantIdentitySyncPolicyPartner';
import { type CrossTenantUserSyncInbound } from './crossTenantUserSyncInbound';
import { serializeCrossTenantUserSyncInbound } from './serializeCrossTenantUserSyncInbound';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCrossTenantIdentitySyncPolicyPartner(writer: SerializationWriter, crossTenantIdentitySyncPolicyPartner: CrossTenantIdentitySyncPolicyPartner | undefined = {} as CrossTenantIdentitySyncPolicyPartner) : void {
        writer.writeStringValue("displayName", crossTenantIdentitySyncPolicyPartner.displayName);
        writer.writeStringValue("@odata.type", crossTenantIdentitySyncPolicyPartner.odataType);
        writer.writeStringValue("tenantId", crossTenantIdentitySyncPolicyPartner.tenantId);
        writer.writeObjectValue<CrossTenantUserSyncInbound>("userSyncInbound", crossTenantIdentitySyncPolicyPartner.userSyncInbound, serializeCrossTenantUserSyncInbound);
        writer.writeAdditionalData(crossTenantIdentitySyncPolicyPartner.additionalData);
}
