import {BookingStaffMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingStaffMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingStaffMemberCollectionResponse();
}
