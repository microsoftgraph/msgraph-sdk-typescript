import type {AvailabilityItem} from './availabilityItem';
import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import type {DateTimeTimeZone} from './dateTimeTimeZone';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAvailabilityItem(writer: SerializationWriter, availabilityItem: AvailabilityItem | undefined = {} as AvailabilityItem) : void {
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", availabilityItem.endDateTime, serializeDateTimeTimeZone);
        writer.writeStringValue("@odata.type", availabilityItem.odataType);
        writer.writeStringValue("serviceId", availabilityItem.serviceId);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", availabilityItem.startDateTime, serializeDateTimeTimeZone);
        writer.writeEnumValue<BookingsAvailabilityStatus>("status", availabilityItem.status);
        writer.writeAdditionalData(availabilityItem.additionalData);
}
