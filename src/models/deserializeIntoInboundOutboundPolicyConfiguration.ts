import { type InboundOutboundPolicyConfiguration } from './inboundOutboundPolicyConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoInboundOutboundPolicyConfiguration(inboundOutboundPolicyConfiguration: InboundOutboundPolicyConfiguration | undefined = {} as InboundOutboundPolicyConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "inboundAllowed": n => { inboundOutboundPolicyConfiguration.inboundAllowed = n.getBooleanValue(); },
        "@odata.type": n => { inboundOutboundPolicyConfiguration.odataType = n.getStringValue(); },
        "outboundAllowed": n => { inboundOutboundPolicyConfiguration.outboundAllowed = n.getBooleanValue(); },
    }
}
