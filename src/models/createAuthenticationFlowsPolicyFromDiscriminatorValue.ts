import { deserializeIntoAuthenticationFlowsPolicy } from './deserializeIntoAuthenticationFlowsPolicy';
import { type AuthenticationFlowsPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationFlowsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationFlowsPolicy;
}
