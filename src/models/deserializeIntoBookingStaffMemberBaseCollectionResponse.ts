import { type BookingStaffMemberBase } from './bookingStaffMemberBase';
import { type BookingStaffMemberBaseCollectionResponse } from './bookingStaffMemberBaseCollectionResponse';
import { createBookingStaffMemberBaseFromDiscriminatorValue } from './createBookingStaffMemberBaseFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeBookingStaffMemberBase } from './serializeBookingStaffMemberBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingStaffMemberBaseCollectionResponse(bookingStaffMemberBaseCollectionResponse: BookingStaffMemberBaseCollectionResponse | undefined = {} as BookingStaffMemberBaseCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingStaffMemberBaseCollectionResponse),
        "value": n => { bookingStaffMemberBaseCollectionResponse.value = n.getCollectionOfObjectValues<BookingStaffMemberBase>(createBookingStaffMemberBaseFromDiscriminatorValue); },
    }
}
