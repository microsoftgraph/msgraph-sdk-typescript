import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {HourPostRequestBody} from './hourPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHourPostRequestBody(hourPostRequestBody: HourPostRequestBody | undefined = {} as HourPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("serialNumber", hourPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(hourPostRequestBody.additionalData);
}
