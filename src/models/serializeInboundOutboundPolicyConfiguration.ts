import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInboundOutboundPolicyConfiguration(writer: SerializationWriter, inboundOutboundPolicyConfiguration: InboundOutboundPolicyConfiguration | undefined = {} as InboundOutboundPolicyConfiguration) : void {
        writer.writeBooleanValue("inboundAllowed", inboundOutboundPolicyConfiguration.inboundAllowed);
        writer.writeStringValue("@odata.type", inboundOutboundPolicyConfiguration.odataType);
        writer.writeBooleanValue("outboundAllowed", inboundOutboundPolicyConfiguration.outboundAllowed);
        writer.writeAdditionalData(inboundOutboundPolicyConfiguration.additionalData);
}
