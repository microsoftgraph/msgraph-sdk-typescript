import {BookingStaffMember} from './bookingStaffMember';
import {BookingStaffRole} from './bookingStaffRole';
import {BookingWorkHours} from './bookingWorkHours';
import {createBookingWorkHoursFromDiscriminatorValue} from './createBookingWorkHoursFromDiscriminatorValue';
import {deserializeIntoBookingStaffMemberBase} from './deserializeIntoBookingStaffMemberBase';
import {serializeBookingWorkHours} from './serializeBookingWorkHours';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingStaffMember(bookingStaffMember: BookingStaffMember | undefined = {} as BookingStaffMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBookingStaffMemberBase(bookingStaffMember),
        "availabilityIsAffectedByPersonalCalendar": n => { bookingStaffMember.availabilityIsAffectedByPersonalCalendar = n.getBooleanValue(); },
        "displayName": n => { bookingStaffMember.displayName = n.getStringValue(); },
        "emailAddress": n => { bookingStaffMember.emailAddress = n.getStringValue(); },
        "isEmailNotificationEnabled": n => { bookingStaffMember.isEmailNotificationEnabled = n.getBooleanValue(); },
        "role": n => { bookingStaffMember.role = n.getEnumValue<BookingStaffRole>(BookingStaffRole); },
        "timeZone": n => { bookingStaffMember.timeZone = n.getStringValue(); },
        "useBusinessHours": n => { bookingStaffMember.useBusinessHours = n.getBooleanValue(); },
        "workingHours": n => { bookingStaffMember.workingHours = n.getCollectionOfObjectValues<BookingWorkHours>(createBookingWorkHoursFromDiscriminatorValue); },
    }
}
