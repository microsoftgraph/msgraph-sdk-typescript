import { createDateTimeTimeZoneFromDiscriminatorValue } from '../../../../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import { type DateTimeTimeZone } from '../../../../../../../models/dateTimeTimeZone';
import { serializeDateTimeTimeZone } from '../../../../../../../models/serializeDateTimeTimeZone';
import { type GetSchedulePostRequestBody } from './getSchedulePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetSchedulePostRequestBody(getSchedulePostRequestBody: GetSchedulePostRequestBody | undefined = {} as GetSchedulePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "availabilityViewInterval": n => { getSchedulePostRequestBody.availabilityViewInterval = n.getNumberValue(); },
        "endTime": n => { getSchedulePostRequestBody.endTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "schedules": n => { getSchedulePostRequestBody.schedules = n.getCollectionOfPrimitiveValues<string>(); },
        "startTime": n => { getSchedulePostRequestBody.startTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
