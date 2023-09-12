import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DatePostRequestBody } from './datePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDatePostRequestBody(writer: SerializationWriter, datePostRequestBody: DatePostRequestBody | undefined = {} as DatePostRequestBody) : void {
        writer.writeObjectValue<Json>("day", datePostRequestBody.day, serializeJson);
        writer.writeObjectValue<Json>("month", datePostRequestBody.month, serializeJson);
        writer.writeObjectValue<Json>("year", datePostRequestBody.year, serializeJson);
        writer.writeAdditionalData(datePostRequestBody.additionalData);
}
