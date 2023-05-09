import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInboundOutboundPolicyConfiguration(inboundOutboundPolicyConfiguration: InboundOutboundPolicyConfiguration | undefined = {} as InboundOutboundPolicyConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "inboundAllowed": n => { inboundOutboundPolicyConfiguration.inboundAllowed = n.getBooleanValue(); },
        "@odata.type": n => { inboundOutboundPolicyConfiguration.odataType = n.getStringValue(); },
        "outboundAllowed": n => { inboundOutboundPolicyConfiguration.outboundAllowed = n.getBooleanValue(); },
    }
}
