import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LeftPostRequestBody} from './leftPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLeftPostRequestBody(leftPostRequestBody: LeftPostRequestBody | undefined = {} as LeftPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("numChars", leftPostRequestBody.numChars, serializeJson);
        writer.writeObjectValue<Json>("text", leftPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(leftPostRequestBody.additionalData);
}
