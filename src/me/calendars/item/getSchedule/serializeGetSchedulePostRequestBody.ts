import {DateTimeTimeZone} from '../../../../models/dateTimeTimeZone';
import {serializeDateTimeTimeZone} from '../../../../models/serializeDateTimeTimeZone';
import {GetSchedulePostRequestBody} from './getSchedulePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetSchedulePostRequestBody(writer: SerializationWriter, getSchedulePostRequestBody: GetSchedulePostRequestBody | undefined = {} as GetSchedulePostRequestBody) : void {
        writer.writeNumberValue("availabilityViewInterval", getSchedulePostRequestBody.availabilityViewInterval);
        writer.writeObjectValue<DateTimeTimeZone>("endTime", getSchedulePostRequestBody.endTime, serializeDateTimeTimeZone);
        writer.writeCollectionOfPrimitiveValues<string>("schedules", getSchedulePostRequestBody.schedules);
        writer.writeObjectValue<DateTimeTimeZone>("startTime", getSchedulePostRequestBody.startTime, serializeDateTimeTimeZone);
        writer.writeAdditionalData(getSchedulePostRequestBody.additionalData);
}
