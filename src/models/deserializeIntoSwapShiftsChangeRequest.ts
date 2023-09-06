import { deserializeIntoOfferShiftRequest } from './deserializeIntoOfferShiftRequest';
import { type SwapShiftsChangeRequest } from './swapShiftsChangeRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSwapShiftsChangeRequest(swapShiftsChangeRequest: SwapShiftsChangeRequest | undefined = {} as SwapShiftsChangeRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOfferShiftRequest(swapShiftsChangeRequest),
        "recipientShiftId": n => { swapShiftsChangeRequest.recipientShiftId = n.getStringValue(); },
    }
}
