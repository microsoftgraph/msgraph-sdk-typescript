import type {BookingBusiness} from './bookingBusiness';
import type {BookingCurrency} from './bookingCurrency';
import {serializeBookingBusiness} from './serializeBookingBusiness';
import {serializeBookingCurrency} from './serializeBookingCurrency';
import type {SolutionsRoot} from './solutionsRoot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSolutionsRoot(writer: SerializationWriter, solutionsRoot: SolutionsRoot | undefined = {} as SolutionsRoot) : void {
        writer.writeCollectionOfObjectValues<BookingBusiness>("bookingBusinesses", solutionsRoot.bookingBusinesses, serializeBookingBusiness);
        writer.writeCollectionOfObjectValues<BookingCurrency>("bookingCurrencies", solutionsRoot.bookingCurrencies, serializeBookingCurrency);
        writer.writeStringValue("@odata.type", solutionsRoot.odataType);
        writer.writeAdditionalData(solutionsRoot.additionalData);
}
