import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DaysPostRequestBody } from './daysPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDaysPostRequestBody(writer: SerializationWriter, daysPostRequestBody: DaysPostRequestBody | undefined = {} as DaysPostRequestBody) : void {
        writer.writeObjectValue<Json>("endDate", daysPostRequestBody.endDate, serializeJson);
        writer.writeObjectValue<Json>("startDate", daysPostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(daysPostRequestBody.additionalData);
}
