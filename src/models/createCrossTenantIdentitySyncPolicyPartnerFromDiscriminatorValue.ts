import {deserializeIntoCrossTenantIdentitySyncPolicyPartner} from './deserializeIntoCrossTenantIdentitySyncPolicyPartner';
import {CrossTenantIdentitySyncPolicyPartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantIdentitySyncPolicyPartner;
}
