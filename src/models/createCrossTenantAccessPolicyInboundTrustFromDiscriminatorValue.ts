import {CrossTenantAccessPolicyInboundTrust} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyInboundTrust {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyInboundTrust();
}
