import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MirrPostRequestBody } from './mirrPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMirrPostRequestBody(writer: SerializationWriter, mirrPostRequestBody: MirrPostRequestBody | undefined = {} as MirrPostRequestBody) : void {
        writer.writeObjectValue<Json>("financeRate", mirrPostRequestBody.financeRate, serializeJson);
        writer.writeObjectValue<Json>("reinvestRate", mirrPostRequestBody.reinvestRate, serializeJson);
        writer.writeObjectValue<Json>("values", mirrPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(mirrPostRequestBody.additionalData);
}
