import type {BookingBusiness} from './bookingBusiness';
import type {BookingCurrency} from './bookingCurrency';
import {createBookingBusinessFromDiscriminatorValue} from './createBookingBusinessFromDiscriminatorValue';
import {createBookingCurrencyFromDiscriminatorValue} from './createBookingCurrencyFromDiscriminatorValue';
import {serializeBookingBusiness} from './serializeBookingBusiness';
import {serializeBookingCurrency} from './serializeBookingCurrency';
import type {SolutionsRoot} from './solutionsRoot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSolutionsRoot(solutionsRoot: SolutionsRoot | undefined = {} as SolutionsRoot) : Record<string, (node: ParseNode) => void> {
    return {
        "bookingBusinesses": n => { solutionsRoot.bookingBusinesses = n.getCollectionOfObjectValues<BookingBusiness>(createBookingBusinessFromDiscriminatorValue); },
        "bookingCurrencies": n => { solutionsRoot.bookingCurrencies = n.getCollectionOfObjectValues<BookingCurrency>(createBookingCurrencyFromDiscriminatorValue); },
        "@odata.type": n => { solutionsRoot.odataType = n.getStringValue(); },
    }
}
