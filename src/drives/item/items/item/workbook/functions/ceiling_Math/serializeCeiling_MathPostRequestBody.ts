import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Ceiling_MathPostRequestBody } from './ceiling_MathPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCeiling_MathPostRequestBody(writer: SerializationWriter, ceiling_MathPostRequestBody: Ceiling_MathPostRequestBody | undefined = {} as Ceiling_MathPostRequestBody) : void {
        writer.writeObjectValue<Json>("mode", ceiling_MathPostRequestBody.mode, serializeJson);
        writer.writeObjectValue<Json>("number", ceiling_MathPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", ceiling_MathPostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(ceiling_MathPostRequestBody.additionalData);
}
