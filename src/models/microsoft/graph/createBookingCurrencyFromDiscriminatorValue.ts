import {BookingCurrency} from './bookingCurrency';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCurrencyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCurrency {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCurrency();
}
