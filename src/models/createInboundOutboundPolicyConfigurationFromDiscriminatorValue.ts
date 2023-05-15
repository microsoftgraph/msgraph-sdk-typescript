import {deserializeIntoInboundOutboundPolicyConfiguration} from './deserializeIntoInboundOutboundPolicyConfiguration';
import {InboundOutboundPolicyConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInboundOutboundPolicyConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInboundOutboundPolicyConfiguration;
}
