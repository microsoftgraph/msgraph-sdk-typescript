import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CleanPostRequestBody} from './cleanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCleanPostRequestBody(cleanPostRequestBody: CleanPostRequestBody | undefined = {} as CleanPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("text", cleanPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(cleanPostRequestBody.additionalData);
}
