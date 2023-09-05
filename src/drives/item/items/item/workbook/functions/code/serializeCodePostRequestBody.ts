import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CodePostRequestBody } from './codePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCodePostRequestBody(writer: SerializationWriter, codePostRequestBody: CodePostRequestBody | undefined = {} as CodePostRequestBody) : void {
        writer.writeObjectValue<Json>("text", codePostRequestBody.text, serializeJson);
        writer.writeAdditionalData(codePostRequestBody.additionalData);
}
