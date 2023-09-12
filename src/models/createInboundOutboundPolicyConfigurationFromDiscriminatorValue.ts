import { deserializeIntoInboundOutboundPolicyConfiguration } from './deserializeIntoInboundOutboundPolicyConfiguration';
import { type InboundOutboundPolicyConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInboundOutboundPolicyConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInboundOutboundPolicyConfiguration;
}
