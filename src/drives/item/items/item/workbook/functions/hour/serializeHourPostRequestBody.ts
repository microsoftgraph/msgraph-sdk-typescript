import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {HourPostRequestBody} from './hourPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHourPostRequestBody(writer: SerializationWriter, hourPostRequestBody: HourPostRequestBody | undefined = {} as HourPostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", hourPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(hourPostRequestBody.additionalData);
}
