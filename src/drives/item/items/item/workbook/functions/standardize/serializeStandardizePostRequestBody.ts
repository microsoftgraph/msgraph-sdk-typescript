import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type StandardizePostRequestBody } from './standardizePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStandardizePostRequestBody(writer: SerializationWriter, standardizePostRequestBody: StandardizePostRequestBody | undefined = {} as StandardizePostRequestBody) : void {
        writer.writeObjectValue<Json>("mean", standardizePostRequestBody.mean, serializeJson);
        writer.writeObjectValue<Json>("standardDev", standardizePostRequestBody.standardDev, serializeJson);
        writer.writeObjectValue<Json>("x", standardizePostRequestBody.x, serializeJson);
        writer.writeAdditionalData(standardizePostRequestBody.additionalData);
}
