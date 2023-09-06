import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TextPostRequestBody } from './textPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTextPostRequestBody(writer: SerializationWriter, textPostRequestBody: TextPostRequestBody | undefined = {} as TextPostRequestBody) : void {
        writer.writeObjectValue<Json>("formatText", textPostRequestBody.formatText, serializeJson);
        writer.writeObjectValue<Json>("value", textPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(textPostRequestBody.additionalData);
}
