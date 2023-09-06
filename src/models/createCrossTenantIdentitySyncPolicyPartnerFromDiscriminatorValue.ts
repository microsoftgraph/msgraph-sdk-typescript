import { deserializeIntoCrossTenantIdentitySyncPolicyPartner } from './deserializeIntoCrossTenantIdentitySyncPolicyPartner';
import { type CrossTenantIdentitySyncPolicyPartner } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantIdentitySyncPolicyPartner;
}
