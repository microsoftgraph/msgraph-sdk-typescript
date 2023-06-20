import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FindBPostRequestBody} from './findBPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFindBPostRequestBody(findBPostRequestBody: FindBPostRequestBody | undefined = {} as FindBPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("findText", findBPostRequestBody.findText, serializeJson);
        writer.writeObjectValue<Json>("startNum", findBPostRequestBody.startNum, serializeJson);
        writer.writeObjectValue<Json>("withinText", findBPostRequestBody.withinText, serializeJson);
        writer.writeAdditionalData(findBPostRequestBody.additionalData);
}
