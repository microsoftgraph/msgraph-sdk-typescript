import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LeftPostRequestBody} from './leftPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLeftPostRequestBody(writer: SerializationWriter, leftPostRequestBody: LeftPostRequestBody | undefined = {} as LeftPostRequestBody) : void {
        writer.writeObjectValue<Json>("numChars", leftPostRequestBody.numChars, serializeJson);
        writer.writeObjectValue<Json>("text", leftPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(leftPostRequestBody.additionalData);
}
