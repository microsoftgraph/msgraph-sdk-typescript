import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingStaffMemberBase(bookingStaffMemberBase: BookingStaffMemberBase | undefined = {} as BookingStaffMemberBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingStaffMemberBase),
    }
}
