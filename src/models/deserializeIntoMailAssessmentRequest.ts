import { deserializeIntoThreatAssessmentRequest } from './deserializeIntoThreatAssessmentRequest';
import { type MailAssessmentRequest } from './mailAssessmentRequest';
import { MailDestinationRoutingReason } from './mailDestinationRoutingReason';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMailAssessmentRequest(mailAssessmentRequest: MailAssessmentRequest | undefined = {} as MailAssessmentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(mailAssessmentRequest),
        "destinationRoutingReason": n => { mailAssessmentRequest.destinationRoutingReason = n.getEnumValue<MailDestinationRoutingReason>(MailDestinationRoutingReason); },
        "messageUri": n => { mailAssessmentRequest.messageUri = n.getStringValue(); },
        "recipientEmail": n => { mailAssessmentRequest.recipientEmail = n.getStringValue(); },
    }
}
