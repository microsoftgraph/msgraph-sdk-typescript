import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AverageIfPostRequestBody } from './averageIfPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAverageIfPostRequestBody(writer: SerializationWriter, averageIfPostRequestBody: AverageIfPostRequestBody | undefined = {} as AverageIfPostRequestBody) : void {
        writer.writeObjectValue<Json>("averageRange", averageIfPostRequestBody.averageRange, serializeJson);
        writer.writeObjectValue<Json>("criteria", averageIfPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("range", averageIfPostRequestBody.range, serializeJson);
        writer.writeAdditionalData(averageIfPostRequestBody.additionalData);
}
