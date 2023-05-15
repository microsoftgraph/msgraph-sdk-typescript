import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MonthPostRequestBody} from './monthPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMonthPostRequestBody(writer: SerializationWriter, monthPostRequestBody: MonthPostRequestBody | undefined = {} as MonthPostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", monthPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(monthPostRequestBody.additionalData);
}
