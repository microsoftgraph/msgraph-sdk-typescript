import {CrossTenantIdentitySyncPolicyPartner} from './crossTenantIdentitySyncPolicyPartner';
import {CrossTenantUserSyncInbound} from './crossTenantUserSyncInbound';
import {serializeCrossTenantUserSyncInbound} from './serializeCrossTenantUserSyncInbound';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantIdentitySyncPolicyPartner(writer: SerializationWriter, crossTenantIdentitySyncPolicyPartner: CrossTenantIdentitySyncPolicyPartner | undefined = {} as CrossTenantIdentitySyncPolicyPartner) : void {
        writer.writeStringValue("displayName", crossTenantIdentitySyncPolicyPartner.displayName);
        writer.writeStringValue("@odata.type", crossTenantIdentitySyncPolicyPartner.odataType);
        writer.writeStringValue("tenantId", crossTenantIdentitySyncPolicyPartner.tenantId);
        writer.writeObjectValue<CrossTenantUserSyncInbound>("userSyncInbound", crossTenantIdentitySyncPolicyPartner.userSyncInbound, serializeCrossTenantUserSyncInbound);
        writer.writeAdditionalData(crossTenantIdentitySyncPolicyPartner.additionalData);
}
