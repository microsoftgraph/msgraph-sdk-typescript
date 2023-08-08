import type {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {Duration} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingSchedulingPolicy(writer: SerializationWriter, bookingSchedulingPolicy: BookingSchedulingPolicy | undefined = {} as BookingSchedulingPolicy) : void {
        writer.writeBooleanValue("allowStaffSelection", bookingSchedulingPolicy.allowStaffSelection);
        writer.writeDurationValue("maximumAdvance", bookingSchedulingPolicy.maximumAdvance);
        writer.writeDurationValue("minimumLeadTime", bookingSchedulingPolicy.minimumLeadTime);
        writer.writeStringValue("@odata.type", bookingSchedulingPolicy.odataType);
        writer.writeBooleanValue("sendConfirmationsToOwner", bookingSchedulingPolicy.sendConfirmationsToOwner);
        writer.writeDurationValue("timeSlotInterval", bookingSchedulingPolicy.timeSlotInterval);
        writer.writeAdditionalData(bookingSchedulingPolicy.additionalData);
}
