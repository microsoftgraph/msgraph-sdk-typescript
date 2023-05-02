import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {MailAssessmentRequest} from './mailAssessmentRequest';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailAssessmentRequest(mailAssessmentRequest: MailAssessmentRequest | undefined = {} as MailAssessmentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(mailAssessmentRequest),
        "destinationRoutingReason": n => { mailAssessmentRequest.destinationRoutingReason = n.getEnumValue<MailDestinationRoutingReason>(MailDestinationRoutingReason); },
        "messageUri": n => { mailAssessmentRequest.messageUri = n.getStringValue(); },
        "recipientEmail": n => { mailAssessmentRequest.recipientEmail = n.getStringValue(); },
    }
}
