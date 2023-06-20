import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LeftbPostRequestBody} from './leftbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLeftbPostRequestBody(leftbPostRequestBody: LeftbPostRequestBody | undefined = {} as LeftbPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("numBytes", leftbPostRequestBody.numBytes, serializeJson);
        writer.writeObjectValue<Json>("text", leftbPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(leftbPostRequestBody.additionalData);
}
