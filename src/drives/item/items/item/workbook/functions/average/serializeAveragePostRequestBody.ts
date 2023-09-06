import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AveragePostRequestBody } from './averagePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAveragePostRequestBody(writer: SerializationWriter, averagePostRequestBody: AveragePostRequestBody | undefined = {} as AveragePostRequestBody) : void {
        writer.writeObjectValue<Json>("values", averagePostRequestBody.values, serializeJson);
        writer.writeAdditionalData(averagePostRequestBody.additionalData);
}
