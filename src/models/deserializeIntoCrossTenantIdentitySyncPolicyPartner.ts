import {createCrossTenantUserSyncInboundFromDiscriminatorValue} from './createCrossTenantUserSyncInboundFromDiscriminatorValue';
import {CrossTenantIdentitySyncPolicyPartner} from './crossTenantIdentitySyncPolicyPartner';
import {CrossTenantUserSyncInbound} from './crossTenantUserSyncInbound';
import {serializeCrossTenantUserSyncInbound} from './serializeCrossTenantUserSyncInbound';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantIdentitySyncPolicyPartner(crossTenantIdentitySyncPolicyPartner: CrossTenantIdentitySyncPolicyPartner | undefined = {} as CrossTenantIdentitySyncPolicyPartner) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { crossTenantIdentitySyncPolicyPartner.displayName = n.getStringValue(); },
        "@odata.type": n => { crossTenantIdentitySyncPolicyPartner.odataType = n.getStringValue(); },
        "tenantId": n => { crossTenantIdentitySyncPolicyPartner.tenantId = n.getStringValue(); },
        "userSyncInbound": n => { crossTenantIdentitySyncPolicyPartner.userSyncInbound = n.getObjectValue<CrossTenantUserSyncInbound>(createCrossTenantUserSyncInboundFromDiscriminatorValue); },
    }
}
