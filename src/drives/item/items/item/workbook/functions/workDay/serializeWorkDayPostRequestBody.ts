import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type WorkDayPostRequestBody } from './workDayPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkDayPostRequestBody(writer: SerializationWriter, workDayPostRequestBody: WorkDayPostRequestBody | undefined = {} as WorkDayPostRequestBody) : void {
        writer.writeObjectValue<Json>("days", workDayPostRequestBody.days, serializeJson);
        writer.writeObjectValue<Json>("holidays", workDayPostRequestBody.holidays, serializeJson);
        writer.writeObjectValue<Json>("startDate", workDayPostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(workDayPostRequestBody.additionalData);
}
