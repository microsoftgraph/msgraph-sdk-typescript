import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {WeekdayPostRequestBody} from './weekdayPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWeekdayPostRequestBody(weekdayPostRequestBody: WeekdayPostRequestBody | undefined = {} as WeekdayPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("returnType", weekdayPostRequestBody.returnType, serializeJson);
        writer.writeObjectValue<Json>("serialNumber", weekdayPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(weekdayPostRequestBody.additionalData);
}
