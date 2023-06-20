import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LowerPostRequestBody} from './lowerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLowerPostRequestBody(lowerPostRequestBody: LowerPostRequestBody | undefined = {} as LowerPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("text", lowerPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(lowerPostRequestBody.additionalData);
}
