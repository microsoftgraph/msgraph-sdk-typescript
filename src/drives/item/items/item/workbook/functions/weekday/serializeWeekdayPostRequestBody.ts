import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {WeekdayPostRequestBody} from './weekdayPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWeekdayPostRequestBody(writer: SerializationWriter, weekdayPostRequestBody: WeekdayPostRequestBody | undefined = {} as WeekdayPostRequestBody) : void {
        writer.writeObjectValue<Json>("returnType", weekdayPostRequestBody.returnType, serializeJson);
        writer.writeObjectValue<Json>("serialNumber", weekdayPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(weekdayPostRequestBody.additionalData);
}
