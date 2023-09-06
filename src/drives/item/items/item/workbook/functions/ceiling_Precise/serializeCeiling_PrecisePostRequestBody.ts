import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Ceiling_PrecisePostRequestBody } from './ceiling_PrecisePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCeiling_PrecisePostRequestBody(writer: SerializationWriter, ceiling_PrecisePostRequestBody: Ceiling_PrecisePostRequestBody | undefined = {} as Ceiling_PrecisePostRequestBody) : void {
        writer.writeObjectValue<Json>("number", ceiling_PrecisePostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", ceiling_PrecisePostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(ceiling_PrecisePostRequestBody.additionalData);
}
