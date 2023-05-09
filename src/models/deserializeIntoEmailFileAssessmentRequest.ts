import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {EmailFileAssessmentRequest} from './emailFileAssessmentRequest';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailFileAssessmentRequest(emailFileAssessmentRequest: EmailFileAssessmentRequest | undefined = {} as EmailFileAssessmentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(emailFileAssessmentRequest),
        "contentData": n => { emailFileAssessmentRequest.contentData = n.getStringValue(); },
        "destinationRoutingReason": n => { emailFileAssessmentRequest.destinationRoutingReason = n.getEnumValue<MailDestinationRoutingReason>(MailDestinationRoutingReason); },
        "recipientEmail": n => { emailFileAssessmentRequest.recipientEmail = n.getStringValue(); },
    }
}
