import {deserializeIntoScheduleChangeRequest} from './deserializeIntoScheduleChangeRequest';
import {OfferShiftRequest} from './offerShiftRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOfferShiftRequest(offerShiftRequest: OfferShiftRequest | undefined = {} as OfferShiftRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleChangeRequest(offerShiftRequest),
        "recipientActionDateTime": n => { offerShiftRequest.recipientActionDateTime = n.getDateValue(); },
        "recipientActionMessage": n => { offerShiftRequest.recipientActionMessage = n.getStringValue(); },
        "recipientUserId": n => { offerShiftRequest.recipientUserId = n.getStringValue(); },
        "senderShiftId": n => { offerShiftRequest.senderShiftId = n.getStringValue(); },
    }
}
