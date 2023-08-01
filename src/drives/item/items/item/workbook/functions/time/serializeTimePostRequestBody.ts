import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TimePostRequestBody} from './timePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimePostRequestBody(writer: SerializationWriter, timePostRequestBody: TimePostRequestBody | undefined = {} as TimePostRequestBody) : void {
        writer.writeObjectValue<Json>("hour", timePostRequestBody.hour, serializeJson);
        writer.writeObjectValue<Json>("minute", timePostRequestBody.minute, serializeJson);
        writer.writeObjectValue<Json>("second", timePostRequestBody.second, serializeJson);
        writer.writeAdditionalData(timePostRequestBody.additionalData);
}
