import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TrimPostRequestBody } from './trimPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTrimPostRequestBody(writer: SerializationWriter, trimPostRequestBody: TrimPostRequestBody | undefined = {} as TrimPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", trimPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(trimPostRequestBody.additionalData);
}
