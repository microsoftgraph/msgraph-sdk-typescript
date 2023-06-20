import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {WeekNumPostRequestBody} from './weekNumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWeekNumPostRequestBody(weekNumPostRequestBody: WeekNumPostRequestBody | undefined = {} as WeekNumPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("returnType", weekNumPostRequestBody.returnType, serializeJson);
        writer.writeObjectValue<Json>("serialNumber", weekNumPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(weekNumPostRequestBody.additionalData);
}
