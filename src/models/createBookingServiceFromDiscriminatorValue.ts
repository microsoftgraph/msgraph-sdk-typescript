import {BookingServiceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingServiceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingServiceImpl();
}
