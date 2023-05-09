import {OfferShiftRequest} from './offerShiftRequest';
import {serializeScheduleChangeRequest} from './serializeScheduleChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOfferShiftRequest(writer: SerializationWriter, offerShiftRequest: OfferShiftRequest | undefined = {} as OfferShiftRequest) : void {
        serializeScheduleChangeRequest(writer, offerShiftRequest)
        writer.writeStringValue("recipientActionMessage", offerShiftRequest.recipientActionMessage);
        writer.writeStringValue("recipientUserId", offerShiftRequest.recipientUserId);
        writer.writeStringValue("senderShiftId", offerShiftRequest.senderShiftId);
}
