import { type BookingSchedulingPolicy } from './bookingSchedulingPolicy';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingSchedulingPolicy(writer: SerializationWriter, bookingSchedulingPolicy: BookingSchedulingPolicy | undefined = {} as BookingSchedulingPolicy) : void {
        writer.writeBooleanValue("allowStaffSelection", bookingSchedulingPolicy.allowStaffSelection);
        writer.writeDurationValue("maximumAdvance", bookingSchedulingPolicy.maximumAdvance);
        writer.writeDurationValue("minimumLeadTime", bookingSchedulingPolicy.minimumLeadTime);
        writer.writeStringValue("@odata.type", bookingSchedulingPolicy.odataType);
        writer.writeBooleanValue("sendConfirmationsToOwner", bookingSchedulingPolicy.sendConfirmationsToOwner);
        writer.writeDurationValue("timeSlotInterval", bookingSchedulingPolicy.timeSlotInterval);
        writer.writeAdditionalData(bookingSchedulingPolicy.additionalData);
}
