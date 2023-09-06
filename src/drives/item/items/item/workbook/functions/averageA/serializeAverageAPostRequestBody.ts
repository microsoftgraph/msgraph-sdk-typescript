import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AverageAPostRequestBody } from './averageAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAverageAPostRequestBody(writer: SerializationWriter, averageAPostRequestBody: AverageAPostRequestBody | undefined = {} as AverageAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", averageAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(averageAPostRequestBody.additionalData);
}
