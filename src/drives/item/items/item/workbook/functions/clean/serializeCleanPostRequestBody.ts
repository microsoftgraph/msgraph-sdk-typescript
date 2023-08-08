import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CleanPostRequestBody} from './cleanPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCleanPostRequestBody(writer: SerializationWriter, cleanPostRequestBody: CleanPostRequestBody | undefined = {} as CleanPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", cleanPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(cleanPostRequestBody.additionalData);
}
