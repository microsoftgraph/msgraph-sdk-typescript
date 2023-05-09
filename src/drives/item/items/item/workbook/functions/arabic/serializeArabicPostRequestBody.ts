import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ArabicPostRequestBody} from './arabicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArabicPostRequestBody(writer: SerializationWriter, arabicPostRequestBody: ArabicPostRequestBody | undefined = {} as ArabicPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", arabicPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(arabicPostRequestBody.additionalData);
}
