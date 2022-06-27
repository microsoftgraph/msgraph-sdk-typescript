import {OfferShiftRequest} from './offerShiftRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SwapShiftsChangeRequest extends Partial<AdditionalDataHolder>, OfferShiftRequest, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Shift ID for the recipient user with whom the request is to swap. */
    recipientShiftId?: string | undefined;
}
