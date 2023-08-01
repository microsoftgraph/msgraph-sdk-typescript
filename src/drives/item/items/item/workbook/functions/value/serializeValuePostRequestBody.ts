import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ValuePostRequestBody} from './valuePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeValuePostRequestBody(writer: SerializationWriter, valuePostRequestBody: ValuePostRequestBody | undefined = {} as ValuePostRequestBody) : void {
        writer.writeObjectValue<Json>("text", valuePostRequestBody.text, serializeJson);
        writer.writeAdditionalData(valuePostRequestBody.additionalData);
}
