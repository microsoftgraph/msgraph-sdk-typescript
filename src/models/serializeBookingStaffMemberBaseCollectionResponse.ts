import type {BookingStaffMemberBase} from './bookingStaffMemberBase';
import type {BookingStaffMemberBaseCollectionResponse} from './bookingStaffMemberBaseCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingStaffMemberBase} from './serializeBookingStaffMemberBase';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberBaseCollectionResponse(writer: SerializationWriter, bookingStaffMemberBaseCollectionResponse: BookingStaffMemberBaseCollectionResponse | undefined = {} as BookingStaffMemberBaseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingStaffMemberBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingStaffMemberBase>("value", bookingStaffMemberBaseCollectionResponse.value, serializeBookingStaffMemberBase);
}
