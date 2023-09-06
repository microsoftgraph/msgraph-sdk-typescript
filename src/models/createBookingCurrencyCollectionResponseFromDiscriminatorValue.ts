import { deserializeIntoBookingCurrencyCollectionResponse } from './deserializeIntoBookingCurrencyCollectionResponse';
import { type BookingCurrencyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingCurrencyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCurrencyCollectionResponse;
}
