import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {FindPostRequestBody} from './findPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFindPostRequestBody(writer: SerializationWriter, findPostRequestBody: FindPostRequestBody | undefined = {} as FindPostRequestBody) : void {
        writer.writeObjectValue<Json>("findText", findPostRequestBody.findText, serializeJson);
        writer.writeObjectValue<Json>("startNum", findPostRequestBody.startNum, serializeJson);
        writer.writeObjectValue<Json>("withinText", findPostRequestBody.withinText, serializeJson);
        writer.writeAdditionalData(findPostRequestBody.additionalData);
}
