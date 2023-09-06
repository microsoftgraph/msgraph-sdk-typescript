import { deserializeIntoBookingCurrency } from './deserializeIntoBookingCurrency';
import { type BookingCurrency } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingCurrencyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCurrency;
}
