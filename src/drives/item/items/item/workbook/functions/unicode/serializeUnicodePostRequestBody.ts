import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {UnicodePostRequestBody} from './unicodePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnicodePostRequestBody(writer: SerializationWriter, unicodePostRequestBody: UnicodePostRequestBody | undefined = {} as UnicodePostRequestBody) : void {
        writer.writeObjectValue<Json>("text", unicodePostRequestBody.text, serializeJson);
        writer.writeAdditionalData(unicodePostRequestBody.additionalData);
}
