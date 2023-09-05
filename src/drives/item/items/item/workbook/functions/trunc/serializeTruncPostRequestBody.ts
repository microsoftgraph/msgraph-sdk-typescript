import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TruncPostRequestBody } from './truncPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTruncPostRequestBody(writer: SerializationWriter, truncPostRequestBody: TruncPostRequestBody | undefined = {} as TruncPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", truncPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numDigits", truncPostRequestBody.numDigits, serializeJson);
        writer.writeAdditionalData(truncPostRequestBody.additionalData);
}
