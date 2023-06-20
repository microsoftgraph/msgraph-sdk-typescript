import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FindPostRequestBody} from './findPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFindPostRequestBody(findPostRequestBody: FindPostRequestBody | undefined = {} as FindPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("findText", findPostRequestBody.findText, serializeJson);
        writer.writeObjectValue<Json>("startNum", findPostRequestBody.startNum, serializeJson);
        writer.writeObjectValue<Json>("withinText", findPostRequestBody.withinText, serializeJson);
        writer.writeAdditionalData(findPostRequestBody.additionalData);
}
