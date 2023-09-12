import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RomanPostRequestBody } from './romanPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRomanPostRequestBody(writer: SerializationWriter, romanPostRequestBody: RomanPostRequestBody | undefined = {} as RomanPostRequestBody) : void {
        writer.writeObjectValue<Json>("form", romanPostRequestBody.form, serializeJson);
        writer.writeObjectValue<Json>("number", romanPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(romanPostRequestBody.additionalData);
}
