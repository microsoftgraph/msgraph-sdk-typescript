import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {KurtPostRequestBody} from './kurtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKurtPostRequestBody(writer: SerializationWriter, kurtPostRequestBody: KurtPostRequestBody | undefined = {} as KurtPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", kurtPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(kurtPostRequestBody.additionalData);
}
