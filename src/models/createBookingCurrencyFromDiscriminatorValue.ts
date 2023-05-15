import {deserializeIntoBookingCurrency} from './deserializeIntoBookingCurrency';
import {BookingCurrency} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCurrencyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCurrency;
}
