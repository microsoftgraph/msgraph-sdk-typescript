import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Ecma_CeilingPostRequestBody } from './ecma_CeilingPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEcma_CeilingPostRequestBody(writer: SerializationWriter, ecma_CeilingPostRequestBody: Ecma_CeilingPostRequestBody | undefined = {} as Ecma_CeilingPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", ecma_CeilingPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", ecma_CeilingPostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(ecma_CeilingPostRequestBody.additionalData);
}
