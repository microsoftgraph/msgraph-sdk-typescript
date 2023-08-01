import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SubtotalPostRequestBody} from './subtotalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubtotalPostRequestBody(writer: SerializationWriter, subtotalPostRequestBody: SubtotalPostRequestBody | undefined = {} as SubtotalPostRequestBody) : void {
        writer.writeObjectValue<Json>("functionNum", subtotalPostRequestBody.functionNum, serializeJson);
        writer.writeObjectValue<Json>("values", subtotalPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(subtotalPostRequestBody.additionalData);
}
