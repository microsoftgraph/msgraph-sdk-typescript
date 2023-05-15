import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ReplacePostRequestBody} from './replacePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReplacePostRequestBody(writer: SerializationWriter, replacePostRequestBody: ReplacePostRequestBody | undefined = {} as ReplacePostRequestBody) : void {
        writer.writeObjectValue<Json>("newText", replacePostRequestBody.newText, serializeJson);
        writer.writeObjectValue<Json>("numChars", replacePostRequestBody.numChars, serializeJson);
        writer.writeObjectValue<Json>("oldText", replacePostRequestBody.oldText, serializeJson);
        writer.writeObjectValue<Json>("startNum", replacePostRequestBody.startNum, serializeJson);
        writer.writeAdditionalData(replacePostRequestBody.additionalData);
}
