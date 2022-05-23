import {OfferShiftRequest} from './offerShiftRequest';

export interface SwapShiftsChangeRequest extends OfferShiftRequest{
    /** Shift ID for the recipient user with whom the request is to swap. */
    recipientShiftId?:string | undefined;
}
