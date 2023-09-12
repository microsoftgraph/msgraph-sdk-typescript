import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type WeekdayPostRequestBody } from './weekdayPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWeekdayPostRequestBody(writer: SerializationWriter, weekdayPostRequestBody: WeekdayPostRequestBody | undefined = {} as WeekdayPostRequestBody) : void {
        writer.writeObjectValue<Json>("returnType", weekdayPostRequestBody.returnType, serializeJson);
        writer.writeObjectValue<Json>("serialNumber", weekdayPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(weekdayPostRequestBody.additionalData);
}
