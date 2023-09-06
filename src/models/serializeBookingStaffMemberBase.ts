import { type BookingStaffMemberBase } from './bookingStaffMemberBase';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberBase(writer: SerializationWriter, bookingStaffMemberBase: BookingStaffMemberBase | undefined = {} as BookingStaffMemberBase) : void {
        serializeEntity(writer, bookingStaffMemberBase)
}
