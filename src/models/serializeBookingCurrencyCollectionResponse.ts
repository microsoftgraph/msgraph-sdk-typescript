import {BookingCurrency} from './bookingCurrency';
import {BookingCurrencyCollectionResponse} from './bookingCurrencyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCurrency} from './serializeBookingCurrency';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCurrencyCollectionResponse(bookingCurrencyCollectionResponse: BookingCurrencyCollectionResponse | undefined = {} as BookingCurrencyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCurrencyCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingCurrency>("value", bookingCurrencyCollectionResponse.value, serializeBookingCurrency);
}
