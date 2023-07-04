import {OfferShiftRequest} from './offerShiftRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SwapShiftsChangeRequest extends OfferShiftRequest, Parsable {
    /**
     * ShiftId for the recipient user with whom the request is to swap.
     */
    recipientShiftId?: string | undefined;
}
