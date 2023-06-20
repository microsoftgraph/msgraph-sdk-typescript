import {AvailabilityItem} from './availabilityItem';
import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAvailabilityItem(availabilityItem: AvailabilityItem | undefined = {} as AvailabilityItem, writer: SerializationWriter) : void {
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", availabilityItem.endDateTime, serializeDateTimeTimeZone);
        writer.writeStringValue("@odata.type", availabilityItem.odataType);
        writer.writeStringValue("serviceId", availabilityItem.serviceId);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", availabilityItem.startDateTime, serializeDateTimeTimeZone);
        writer.writeEnumValue<BookingsAvailabilityStatus>("status", availabilityItem.status);
        writer.writeAdditionalData(availabilityItem.additionalData);
}
