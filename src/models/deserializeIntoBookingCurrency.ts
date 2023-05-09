import {BookingCurrency} from './bookingCurrency';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCurrency(bookingCurrency: BookingCurrency | undefined = {} as BookingCurrency) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingCurrency),
        "symbol": n => { bookingCurrency.symbol = n.getStringValue(); },
    }
}
