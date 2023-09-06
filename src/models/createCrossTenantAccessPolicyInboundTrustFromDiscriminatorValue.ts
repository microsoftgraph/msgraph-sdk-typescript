import { deserializeIntoCrossTenantAccessPolicyInboundTrust } from './deserializeIntoCrossTenantAccessPolicyInboundTrust';
import { type CrossTenantAccessPolicyInboundTrust } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicyInboundTrust;
}
