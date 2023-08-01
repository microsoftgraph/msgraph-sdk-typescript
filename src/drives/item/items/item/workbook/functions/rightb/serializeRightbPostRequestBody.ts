import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {RightbPostRequestBody} from './rightbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRightbPostRequestBody(writer: SerializationWriter, rightbPostRequestBody: RightbPostRequestBody | undefined = {} as RightbPostRequestBody) : void {
        writer.writeObjectValue<Json>("numBytes", rightbPostRequestBody.numBytes, serializeJson);
        writer.writeObjectValue<Json>("text", rightbPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(rightbPostRequestBody.additionalData);
}
