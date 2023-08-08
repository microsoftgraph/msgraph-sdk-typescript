import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SubstitutePostRequestBody} from './substitutePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubstitutePostRequestBody(writer: SerializationWriter, substitutePostRequestBody: SubstitutePostRequestBody | undefined = {} as SubstitutePostRequestBody) : void {
        writer.writeObjectValue<Json>("instanceNum", substitutePostRequestBody.instanceNum, serializeJson);
        writer.writeObjectValue<Json>("newText", substitutePostRequestBody.newText, serializeJson);
        writer.writeObjectValue<Json>("oldText", substitutePostRequestBody.oldText, serializeJson);
        writer.writeObjectValue<Json>("text", substitutePostRequestBody.text, serializeJson);
        writer.writeAdditionalData(substitutePostRequestBody.additionalData);
}
