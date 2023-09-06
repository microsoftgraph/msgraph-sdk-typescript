import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TrimMeanPostRequestBody } from './trimMeanPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTrimMeanPostRequestBody(writer: SerializationWriter, trimMeanPostRequestBody: TrimMeanPostRequestBody | undefined = {} as TrimMeanPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", trimMeanPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("percent", trimMeanPostRequestBody.percent, serializeJson);
        writer.writeAdditionalData(trimMeanPostRequestBody.additionalData);
}
