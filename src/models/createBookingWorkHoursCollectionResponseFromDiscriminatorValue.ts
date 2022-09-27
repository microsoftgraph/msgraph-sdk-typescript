import {BookingWorkHoursCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingWorkHoursCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingWorkHoursCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingWorkHoursCollectionResponse();
}
