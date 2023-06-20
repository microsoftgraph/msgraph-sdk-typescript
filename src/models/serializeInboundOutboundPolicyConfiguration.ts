import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInboundOutboundPolicyConfiguration(inboundOutboundPolicyConfiguration: InboundOutboundPolicyConfiguration | undefined = {} as InboundOutboundPolicyConfiguration, writer: SerializationWriter) : void {
        writer.writeBooleanValue("inboundAllowed", inboundOutboundPolicyConfiguration.inboundAllowed);
        writer.writeStringValue("@odata.type", inboundOutboundPolicyConfiguration.odataType);
        writer.writeBooleanValue("outboundAllowed", inboundOutboundPolicyConfiguration.outboundAllowed);
        writer.writeAdditionalData(inboundOutboundPolicyConfiguration.additionalData);
}
