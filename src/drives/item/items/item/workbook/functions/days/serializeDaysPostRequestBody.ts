import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DaysPostRequestBody} from './daysPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDaysPostRequestBody(daysPostRequestBody: DaysPostRequestBody | undefined = {} as DaysPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("endDate", daysPostRequestBody.endDate, serializeJson);
        writer.writeObjectValue<Json>("startDate", daysPostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(daysPostRequestBody.additionalData);
}
