import { serializeOfferShiftRequest } from './serializeOfferShiftRequest';
import { type SwapShiftsChangeRequest } from './swapShiftsChangeRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSwapShiftsChangeRequest(writer: SerializationWriter, swapShiftsChangeRequest: SwapShiftsChangeRequest | undefined = {} as SwapShiftsChangeRequest) : void {
        serializeOfferShiftRequest(writer, swapShiftsChangeRequest)
        writer.writeStringValue("recipientShiftId", swapShiftsChangeRequest.recipientShiftId);
}
