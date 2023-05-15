import {BookingStaffMember} from './bookingStaffMember';
import {BookingStaffRole} from './bookingStaffRole';
import {BookingWorkHours} from './bookingWorkHours';
import {serializeBookingStaffMemberBase} from './serializeBookingStaffMemberBase';
import {serializeBookingWorkHours} from './serializeBookingWorkHours';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
