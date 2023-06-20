import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DayPostRequestBody} from './dayPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDayPostRequestBody(dayPostRequestBody: DayPostRequestBody | undefined = {} as DayPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("serialNumber", dayPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(dayPostRequestBody.additionalData);
}
