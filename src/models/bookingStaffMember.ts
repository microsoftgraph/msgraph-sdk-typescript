import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {BookingStaffRole} from './bookingStaffRole';
import {BookingWorkHours} from './bookingWorkHours';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingStaffMember extends BookingStaffMemberBase, Parsable {
    /**
     * True means that if the staff member is a Microsoft 365 user, the Bookings API would verify the staff member's availability in their personal calendar in Microsoft 365, before making a booking.
     */
    availabilityIsAffectedByPersonalCalendar?: boolean | undefined;
    /**
     * The name of the staff member, as displayed to customers. Required.
     */
    displayName?: string | undefined;
    /**
     * The email address of the staff member. This can be in the same Microsoft 365 tenant as the business, or in a different email domain. This email address can be used if the sendConfirmationsToOwner property is set to true in the scheduling policy of the business. Required.
     */
    emailAddress?: string | undefined;
    /**
     * True indicates that a staff member will be notified via email when a booking assigned to them is created or changed.
     */
    isEmailNotificationEnabled?: boolean | undefined;
    /**
     * The role property
     */
    role?: BookingStaffRole | undefined;
    /**
     * The time zone of the staff member. For a list of possible values, see dateTimeTimeZone.
     */
    timeZone?: string | undefined;
    /**
     * True means the staff member's availability is as specified in the businessHours property of the business. False means the availability is determined by the staff member's workingHours property setting.
     */
    useBusinessHours?: boolean | undefined;
    /**
     * The range of hours each day of the week that the staff member is available for booking. By default, they are initialized to be the same as the businessHours property of the business.
     */
    workingHours?: BookingWorkHours[] | undefined;
}
