import { type InboundOutboundPolicyConfiguration } from './inboundOutboundPolicyConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInboundOutboundPolicyConfiguration(writer: SerializationWriter, inboundOutboundPolicyConfiguration: InboundOutboundPolicyConfiguration | undefined = {} as InboundOutboundPolicyConfiguration) : void {
        writer.writeBooleanValue("inboundAllowed", inboundOutboundPolicyConfiguration.inboundAllowed);
        writer.writeStringValue("@odata.type", inboundOutboundPolicyConfiguration.odataType);
        writer.writeBooleanValue("outboundAllowed", inboundOutboundPolicyConfiguration.outboundAllowed);
        writer.writeAdditionalData(inboundOutboundPolicyConfiguration.additionalData);
}
