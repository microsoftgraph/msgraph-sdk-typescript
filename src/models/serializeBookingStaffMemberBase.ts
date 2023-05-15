import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberBase(writer: SerializationWriter, bookingStaffMemberBase: BookingStaffMemberBase | undefined = {} as BookingStaffMemberBase) : void {
        serializeEntity(writer, bookingStaffMemberBase)
}
