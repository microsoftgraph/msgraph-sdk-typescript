import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LowerPostRequestBody} from './lowerPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLowerPostRequestBody(writer: SerializationWriter, lowerPostRequestBody: LowerPostRequestBody | undefined = {} as LowerPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", lowerPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(lowerPostRequestBody.additionalData);
}
