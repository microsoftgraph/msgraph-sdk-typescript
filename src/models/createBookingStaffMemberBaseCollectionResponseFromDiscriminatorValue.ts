import { deserializeIntoBookingStaffMemberBaseCollectionResponse } from './deserializeIntoBookingStaffMemberBaseCollectionResponse';
import { type BookingStaffMemberBaseCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingStaffMemberBaseCollectionResponse;
}
