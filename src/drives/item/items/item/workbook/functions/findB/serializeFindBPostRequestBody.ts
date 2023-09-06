import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FindBPostRequestBody } from './findBPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFindBPostRequestBody(writer: SerializationWriter, findBPostRequestBody: FindBPostRequestBody | undefined = {} as FindBPostRequestBody) : void {
        writer.writeObjectValue<Json>("findText", findBPostRequestBody.findText, serializeJson);
        writer.writeObjectValue<Json>("startNum", findBPostRequestBody.startNum, serializeJson);
        writer.writeObjectValue<Json>("withinText", findBPostRequestBody.withinText, serializeJson);
        writer.writeAdditionalData(findBPostRequestBody.additionalData);
}
