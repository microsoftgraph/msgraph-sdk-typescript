import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {KurtPostRequestBody} from './kurtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKurtPostRequestBody(writer: SerializationWriter, kurtPostRequestBody: KurtPostRequestBody | undefined = {} as KurtPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", kurtPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(kurtPostRequestBody.additionalData);
}
