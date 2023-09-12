import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AverageIfsPostRequestBody } from './averageIfsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAverageIfsPostRequestBody(writer: SerializationWriter, averageIfsPostRequestBody: AverageIfsPostRequestBody | undefined = {} as AverageIfsPostRequestBody) : void {
        writer.writeObjectValue<Json>("averageRange", averageIfsPostRequestBody.averageRange, serializeJson);
        writer.writeObjectValue<Json>("values", averageIfsPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(averageIfsPostRequestBody.additionalData);
}
