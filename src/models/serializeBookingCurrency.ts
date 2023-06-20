import {BookingCurrency} from './bookingCurrency';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCurrency(bookingCurrency: BookingCurrency | undefined = {} as BookingCurrency, writer: SerializationWriter) : void {
        serializeEntity(writer, bookingCurrency)
        writer.writeStringValue("symbol", bookingCurrency.symbol);
}
