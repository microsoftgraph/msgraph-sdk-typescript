import {deserializeIntoCrossTenantAccessPolicyInboundTrust} from './deserializeIntoCrossTenantAccessPolicyInboundTrust';
import {CrossTenantAccessPolicyInboundTrust} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicyInboundTrust;
}
