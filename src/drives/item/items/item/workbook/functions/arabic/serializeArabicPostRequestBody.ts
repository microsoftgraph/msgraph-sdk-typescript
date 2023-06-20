import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ArabicPostRequestBody} from './arabicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArabicPostRequestBody(arabicPostRequestBody: ArabicPostRequestBody | undefined = {} as ArabicPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("text", arabicPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(arabicPostRequestBody.additionalData);
}
