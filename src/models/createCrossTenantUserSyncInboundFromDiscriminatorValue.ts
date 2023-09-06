import { deserializeIntoCrossTenantUserSyncInbound } from './deserializeIntoCrossTenantUserSyncInbound';
import { type CrossTenantUserSyncInbound } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCrossTenantUserSyncInboundFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantUserSyncInbound;
}
