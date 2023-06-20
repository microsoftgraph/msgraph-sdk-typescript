import {MailAssessmentRequest} from './mailAssessmentRequest';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailAssessmentRequest(mailAssessmentRequest: MailAssessmentRequest | undefined = {} as MailAssessmentRequest, writer: SerializationWriter) : void {
        serializeThreatAssessmentRequest(writer, mailAssessmentRequest)
        writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", mailAssessmentRequest.destinationRoutingReason);
        writer.writeStringValue("messageUri", mailAssessmentRequest.messageUri);
        writer.writeStringValue("recipientEmail", mailAssessmentRequest.recipientEmail);
}
