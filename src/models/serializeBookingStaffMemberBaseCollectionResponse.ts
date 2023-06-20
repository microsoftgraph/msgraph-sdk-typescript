import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {BookingStaffMemberBaseCollectionResponse} from './bookingStaffMemberBaseCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingStaffMemberBase} from './serializeBookingStaffMemberBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberBaseCollectionResponse(bookingStaffMemberBaseCollectionResponse: BookingStaffMemberBaseCollectionResponse | undefined = {} as BookingStaffMemberBaseCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingStaffMemberBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingStaffMemberBase>("value", bookingStaffMemberBaseCollectionResponse.value, serializeBookingStaffMemberBase);
}
