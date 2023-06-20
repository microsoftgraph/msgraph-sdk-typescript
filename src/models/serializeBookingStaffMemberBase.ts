import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberBase(bookingStaffMemberBase: BookingStaffMemberBase | undefined = {} as BookingStaffMemberBase, writer: SerializationWriter) : void {
        serializeEntity(writer, bookingStaffMemberBase)
}
