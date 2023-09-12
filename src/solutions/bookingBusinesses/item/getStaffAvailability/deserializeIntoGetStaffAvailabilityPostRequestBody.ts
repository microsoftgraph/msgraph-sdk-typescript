import { createDateTimeTimeZoneFromDiscriminatorValue } from '../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import { type DateTimeTimeZone } from '../../../../models/dateTimeTimeZone';
import { serializeDateTimeTimeZone } from '../../../../models/serializeDateTimeTimeZone';
import { type GetStaffAvailabilityPostRequestBody } from './getStaffAvailabilityPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetStaffAvailabilityPostRequestBody(getStaffAvailabilityPostRequestBody: GetStaffAvailabilityPostRequestBody | undefined = {} as GetStaffAvailabilityPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { getStaffAvailabilityPostRequestBody.endDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "staffIds": n => { getStaffAvailabilityPostRequestBody.staffIds = n.getCollectionOfPrimitiveValues<string>(); },
        "startDateTime": n => { getStaffAvailabilityPostRequestBody.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
