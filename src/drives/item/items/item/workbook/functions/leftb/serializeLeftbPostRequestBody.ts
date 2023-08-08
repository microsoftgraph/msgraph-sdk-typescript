import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LeftbPostRequestBody} from './leftbPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLeftbPostRequestBody(writer: SerializationWriter, leftbPostRequestBody: LeftbPostRequestBody | undefined = {} as LeftbPostRequestBody) : void {
        writer.writeObjectValue<Json>("numBytes", leftbPostRequestBody.numBytes, serializeJson);
        writer.writeObjectValue<Json>("text", leftbPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(leftbPostRequestBody.additionalData);
}
