import { type BookingCurrency } from './bookingCurrency';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingCurrency(writer: SerializationWriter, bookingCurrency: BookingCurrency | undefined = {} as BookingCurrency) : void {
        serializeEntity(writer, bookingCurrency)
        writer.writeStringValue("symbol", bookingCurrency.symbol);
}
