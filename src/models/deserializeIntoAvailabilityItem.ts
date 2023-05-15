import {AvailabilityItem} from './availabilityItem';
import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAvailabilityItem(availabilityItem: AvailabilityItem | undefined = {} as AvailabilityItem) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { availabilityItem.endDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "@odata.type": n => { availabilityItem.odataType = n.getStringValue(); },
        "serviceId": n => { availabilityItem.serviceId = n.getStringValue(); },
        "startDateTime": n => { availabilityItem.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "status": n => { availabilityItem.status = n.getEnumValue<BookingsAvailabilityStatus>(BookingsAvailabilityStatus); },
    }
}
