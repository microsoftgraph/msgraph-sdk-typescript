import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MedianPostRequestBody } from './medianPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMedianPostRequestBody(writer: SerializationWriter, medianPostRequestBody: MedianPostRequestBody | undefined = {} as MedianPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", medianPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(medianPostRequestBody.additionalData);
}
