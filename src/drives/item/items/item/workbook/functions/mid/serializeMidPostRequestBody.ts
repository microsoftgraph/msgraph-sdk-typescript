import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MidPostRequestBody} from './midPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMidPostRequestBody(writer: SerializationWriter, midPostRequestBody: MidPostRequestBody | undefined = {} as MidPostRequestBody) : void {
        writer.writeObjectValue<Json>("numChars", midPostRequestBody.numChars, serializeJson);
        writer.writeObjectValue<Json>("startNum", midPostRequestBody.startNum, serializeJson);
        writer.writeObjectValue<Json>("text", midPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(midPostRequestBody.additionalData);
}
