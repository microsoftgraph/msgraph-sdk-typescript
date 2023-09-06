import { type BookingStaffMember } from './bookingStaffMember';
import { BookingStaffRole } from './bookingStaffRole';
import { type BookingWorkHours } from './bookingWorkHours';
import { serializeBookingStaffMemberBase } from './serializeBookingStaffMemberBase';
import { serializeBookingWorkHours } from './serializeBookingWorkHours';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMember(writer: SerializationWriter, bookingStaffMember: BookingStaffMember | undefined = {} as BookingStaffMember) : void {
        serializeBookingStaffMemberBase(writer, bookingStaffMember)
        writer.writeBooleanValue("availabilityIsAffectedByPersonalCalendar", bookingStaffMember.availabilityIsAffectedByPersonalCalendar);
        writer.writeStringValue("displayName", bookingStaffMember.displayName);
        writer.writeStringValue("emailAddress", bookingStaffMember.emailAddress);
        writer.writeBooleanValue("isEmailNotificationEnabled", bookingStaffMember.isEmailNotificationEnabled);
        writer.writeEnumValue<BookingStaffRole>("role", bookingStaffMember.role);
        writer.writeStringValue("timeZone", bookingStaffMember.timeZone);
        writer.writeBooleanValue("useBusinessHours", bookingStaffMember.useBusinessHours);
        writer.writeCollectionOfObjectValues<BookingWorkHours>("workingHours", bookingStaffMember.workingHours, serializeBookingWorkHours);
}
