import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AscPostRequestBody } from './ascPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAscPostRequestBody(writer: SerializationWriter, ascPostRequestBody: AscPostRequestBody | undefined = {} as AscPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", ascPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(ascPostRequestBody.additionalData);
}
