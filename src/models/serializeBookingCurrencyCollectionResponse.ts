import {BookingCurrency} from './bookingCurrency';
import {BookingCurrencyCollectionResponse} from './bookingCurrencyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCurrency} from './serializeBookingCurrency';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCurrencyCollectionResponse(writer: SerializationWriter, bookingCurrencyCollectionResponse: BookingCurrencyCollectionResponse | undefined = {} as BookingCurrencyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCurrencyCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingCurrency>("value", bookingCurrencyCollectionResponse.value, serializeBookingCurrency);
}
