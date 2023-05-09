import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from '../../../../models/dateTimeTimeZone';
import {serializeDateTimeTimeZone} from '../../../../models/serializeDateTimeTimeZone';
import {GetStaffAvailabilityPostRequestBody} from './getStaffAvailabilityPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetStaffAvailabilityPostRequestBody(getStaffAvailabilityPostRequestBody: GetStaffAvailabilityPostRequestBody | undefined = {} as GetStaffAvailabilityPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { getStaffAvailabilityPostRequestBody.endDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "staffIds": n => { getStaffAvailabilityPostRequestBody.staffIds = n.getCollectionOfPrimitiveValues<string>(); },
        "startDateTime": n => { getStaffAvailabilityPostRequestBody.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
