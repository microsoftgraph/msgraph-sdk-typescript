import {EmailFileAssessmentRequest} from './emailFileAssessmentRequest';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailFileAssessmentRequest(writer: SerializationWriter, emailFileAssessmentRequest: EmailFileAssessmentRequest | undefined = {} as EmailFileAssessmentRequest) : void {
        serializeThreatAssessmentRequest(writer, emailFileAssessmentRequest)
        writer.writeStringValue("contentData", emailFileAssessmentRequest.contentData);
        writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", emailFileAssessmentRequest.destinationRoutingReason);
        writer.writeStringValue("recipientEmail", emailFileAssessmentRequest.recipientEmail);
}
