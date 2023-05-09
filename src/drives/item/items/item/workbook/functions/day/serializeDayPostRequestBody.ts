import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DayPostRequestBody} from './dayPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDayPostRequestBody(writer: SerializationWriter, dayPostRequestBody: DayPostRequestBody | undefined = {} as DayPostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", dayPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(dayPostRequestBody.additionalData);
}
