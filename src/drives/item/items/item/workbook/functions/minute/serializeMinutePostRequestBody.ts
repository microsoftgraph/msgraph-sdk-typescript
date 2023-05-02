import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MinutePostRequestBody} from './minutePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMinutePostRequestBody(writer: SerializationWriter, minutePostRequestBody: MinutePostRequestBody | undefined = {} as MinutePostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", minutePostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(minutePostRequestBody.additionalData);
}
