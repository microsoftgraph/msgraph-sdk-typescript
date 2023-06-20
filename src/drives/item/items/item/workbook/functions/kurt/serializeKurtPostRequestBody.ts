import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {KurtPostRequestBody} from './kurtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKurtPostRequestBody(kurtPostRequestBody: KurtPostRequestBody | undefined = {} as KurtPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", kurtPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(kurtPostRequestBody.additionalData);
}
