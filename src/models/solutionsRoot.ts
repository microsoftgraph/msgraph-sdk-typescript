import {BookingBusiness} from './bookingBusiness';
import {BookingCurrency} from './bookingCurrency';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SolutionsRoot extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The bookingBusinesses property
     */
    bookingBusinesses?: BookingBusiness[] | undefined;
    /**
     * The bookingCurrencies property
     */
    bookingCurrencies?: BookingCurrency[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
