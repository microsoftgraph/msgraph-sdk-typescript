import {serializeOfferShiftRequest} from './serializeOfferShiftRequest';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSwapShiftsChangeRequest(writer: SerializationWriter, swapShiftsChangeRequest: SwapShiftsChangeRequest | undefined = {} as SwapShiftsChangeRequest) : void {
        serializeOfferShiftRequest(writer, swapShiftsChangeRequest)
        writer.writeStringValue("recipientShiftId", swapShiftsChangeRequest.recipientShiftId);
}
