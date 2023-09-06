import { type CrossTenantUserSyncInbound } from './crossTenantUserSyncInbound';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantUserSyncInbound(crossTenantUserSyncInbound: CrossTenantUserSyncInbound | undefined = {} as CrossTenantUserSyncInbound) : Record<string, (node: ParseNode) => void> {
    return {
        "isSyncAllowed": n => { crossTenantUserSyncInbound.isSyncAllowed = n.getBooleanValue(); },
        "@odata.type": n => { crossTenantUserSyncInbound.odataType = n.getStringValue(); },
    }
}
