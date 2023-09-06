import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ReplaceBPostRequestBody } from './replaceBPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeReplaceBPostRequestBody(writer: SerializationWriter, replaceBPostRequestBody: ReplaceBPostRequestBody | undefined = {} as ReplaceBPostRequestBody) : void {
        writer.writeObjectValue<Json>("newText", replaceBPostRequestBody.newText, serializeJson);
        writer.writeObjectValue<Json>("numBytes", replaceBPostRequestBody.numBytes, serializeJson);
        writer.writeObjectValue<Json>("oldText", replaceBPostRequestBody.oldText, serializeJson);
        writer.writeObjectValue<Json>("startNum", replaceBPostRequestBody.startNum, serializeJson);
        writer.writeAdditionalData(replaceBPostRequestBody.additionalData);
}
