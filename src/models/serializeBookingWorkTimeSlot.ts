import { type BookingWorkTimeSlot } from './bookingWorkTimeSlot';
import { TimeOnly, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingWorkTimeSlot(writer: SerializationWriter, bookingWorkTimeSlot: BookingWorkTimeSlot | undefined = {} as BookingWorkTimeSlot) : void {
        writer.writeTimeOnlyValue("endTime", bookingWorkTimeSlot.endTime);
        writer.writeStringValue("@odata.type", bookingWorkTimeSlot.odataType);
        writer.writeTimeOnlyValue("startTime", bookingWorkTimeSlot.startTime);
        writer.writeAdditionalData(bookingWorkTimeSlot.additionalData);
}
