import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LowerPostRequestBody} from './lowerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLowerPostRequestBody(writer: SerializationWriter, lowerPostRequestBody: LowerPostRequestBody | undefined = {} as LowerPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", lowerPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(lowerPostRequestBody.additionalData);
}
