import {BookingBusiness} from './bookingBusiness';
import {BookingCurrency} from './bookingCurrency';

export interface SolutionsRoot{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The bookingBusinesses property */
    bookingBusinesses?:BookingBusiness[] | undefined;
    /** The bookingCurrencies property */
    bookingCurrencies?:BookingCurrency[] | undefined;
}
