import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CharPostRequestBody } from './charPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCharPostRequestBody(writer: SerializationWriter, charPostRequestBody: CharPostRequestBody | undefined = {} as CharPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", charPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(charPostRequestBody.additionalData);
}
