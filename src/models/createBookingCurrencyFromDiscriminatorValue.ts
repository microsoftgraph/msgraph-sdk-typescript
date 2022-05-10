import {BookingCurrencyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCurrencyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCurrencyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCurrencyImpl();
}
