import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TextPostRequestBody} from './textPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTextPostRequestBody(writer: SerializationWriter, textPostRequestBody: TextPostRequestBody | undefined = {} as TextPostRequestBody) : void {
        writer.writeObjectValue<Json>("formatText", textPostRequestBody.formatText, serializeJson);
        writer.writeObjectValue<Json>("value", textPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(textPostRequestBody.additionalData);
}
