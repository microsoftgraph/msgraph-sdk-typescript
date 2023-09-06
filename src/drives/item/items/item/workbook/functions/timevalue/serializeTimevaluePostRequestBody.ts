import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TimevaluePostRequestBody } from './timevaluePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTimevaluePostRequestBody(writer: SerializationWriter, timevaluePostRequestBody: TimevaluePostRequestBody | undefined = {} as TimevaluePostRequestBody) : void {
        writer.writeObjectValue<Json>("timeText", timevaluePostRequestBody.timeText, serializeJson);
        writer.writeAdditionalData(timevaluePostRequestBody.additionalData);
}
