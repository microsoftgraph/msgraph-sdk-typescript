import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DayPostRequestBody} from './dayPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDayPostRequestBody(writer: SerializationWriter, dayPostRequestBody: DayPostRequestBody | undefined = {} as DayPostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", dayPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(dayPostRequestBody.additionalData);
}
