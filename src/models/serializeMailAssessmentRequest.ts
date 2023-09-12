import { type MailAssessmentRequest } from './mailAssessmentRequest';
import { MailDestinationRoutingReason } from './mailDestinationRoutingReason';
import { serializeThreatAssessmentRequest } from './serializeThreatAssessmentRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMailAssessmentRequest(writer: SerializationWriter, mailAssessmentRequest: MailAssessmentRequest | undefined = {} as MailAssessmentRequest) : void {
        serializeThreatAssessmentRequest(writer, mailAssessmentRequest)
        writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", mailAssessmentRequest.destinationRoutingReason);
        writer.writeStringValue("messageUri", mailAssessmentRequest.messageUri);
        writer.writeStringValue("recipientEmail", mailAssessmentRequest.recipientEmail);
}
