import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RightPostRequestBody} from './rightPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRightPostRequestBody(writer: SerializationWriter, rightPostRequestBody: RightPostRequestBody | undefined = {} as RightPostRequestBody) : void {
        writer.writeObjectValue<Json>("numChars", rightPostRequestBody.numChars, serializeJson);
        writer.writeObjectValue<Json>("text", rightPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(rightPostRequestBody.additionalData);
}
