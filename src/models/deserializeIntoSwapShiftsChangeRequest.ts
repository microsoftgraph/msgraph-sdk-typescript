import {deserializeIntoOfferShiftRequest} from './deserializeIntoOfferShiftRequest';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSwapShiftsChangeRequest(swapShiftsChangeRequest: SwapShiftsChangeRequest | undefined = {} as SwapShiftsChangeRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOfferShiftRequest(swapShiftsChangeRequest),
        "recipientShiftId": n => { swapShiftsChangeRequest.recipientShiftId = n.getStringValue(); },
    }
}
