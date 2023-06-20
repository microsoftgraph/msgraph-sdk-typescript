import {DateTimeTimeZone} from '../../../../models/dateTimeTimeZone';
import {serializeDateTimeTimeZone} from '../../../../models/serializeDateTimeTimeZone';
import {GetStaffAvailabilityPostRequestBody} from './getStaffAvailabilityPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetStaffAvailabilityPostRequestBody(getStaffAvailabilityPostRequestBody: GetStaffAvailabilityPostRequestBody | undefined = {} as GetStaffAvailabilityPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", getStaffAvailabilityPostRequestBody.endDateTime, serializeDateTimeTimeZone);
        writer.writeCollectionOfPrimitiveValues<string>("staffIds", getStaffAvailabilityPostRequestBody.staffIds);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", getStaffAvailabilityPostRequestBody.startDateTime, serializeDateTimeTimeZone);
        writer.writeAdditionalData(getStaffAvailabilityPostRequestBody.additionalData);
}
