import { type BookingStaffMemberBase } from './bookingStaffMemberBase';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingStaffMemberBase(bookingStaffMemberBase: BookingStaffMemberBase | undefined = {} as BookingStaffMemberBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingStaffMemberBase),
    }
}
