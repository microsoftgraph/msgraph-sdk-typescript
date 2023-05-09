import {MailAssessmentRequest} from './mailAssessmentRequest';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailAssessmentRequest(writer: SerializationWriter, mailAssessmentRequest: MailAssessmentRequest | undefined = {} as MailAssessmentRequest) : void {
        serializeThreatAssessmentRequest(writer, mailAssessmentRequest)
        writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", mailAssessmentRequest.destinationRoutingReason);
        writer.writeStringValue("messageUri", mailAssessmentRequest.messageUri);
        writer.writeStringValue("recipientEmail", mailAssessmentRequest.recipientEmail);
}
