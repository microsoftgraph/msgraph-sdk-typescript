import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {BookingStaffMemberBaseCollectionResponse} from './bookingStaffMemberBaseCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingStaffMemberBase} from './serializeBookingStaffMemberBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberBaseCollectionResponse(writer: SerializationWriter, bookingStaffMemberBaseCollectionResponse: BookingStaffMemberBaseCollectionResponse | undefined = {} as BookingStaffMemberBaseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingStaffMemberBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingStaffMemberBase>("value", bookingStaffMemberBaseCollectionResponse.value, serializeBookingStaffMemberBase);
}
