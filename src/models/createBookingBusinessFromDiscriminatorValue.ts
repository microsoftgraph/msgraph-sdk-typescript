import {BookingBusinessImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingBusinessFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingBusinessImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingBusinessImpl();
}
