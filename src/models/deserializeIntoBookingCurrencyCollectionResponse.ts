import { type BookingCurrency } from './bookingCurrency';
import { type BookingCurrencyCollectionResponse } from './bookingCurrencyCollectionResponse';
import { createBookingCurrencyFromDiscriminatorValue } from './createBookingCurrencyFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeBookingCurrency } from './serializeBookingCurrency';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCurrencyCollectionResponse(bookingCurrencyCollectionResponse: BookingCurrencyCollectionResponse | undefined = {} as BookingCurrencyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCurrencyCollectionResponse),
        "value": n => { bookingCurrencyCollectionResponse.value = n.getCollectionOfObjectValues<BookingCurrency>(createBookingCurrencyFromDiscriminatorValue); },
    }
}
