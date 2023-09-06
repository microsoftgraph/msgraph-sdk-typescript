import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MinutePostRequestBody } from './minutePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMinutePostRequestBody(writer: SerializationWriter, minutePostRequestBody: MinutePostRequestBody | undefined = {} as MinutePostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", minutePostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(minutePostRequestBody.additionalData);
}
