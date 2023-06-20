import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MonthPostRequestBody} from './monthPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMonthPostRequestBody(monthPostRequestBody: MonthPostRequestBody | undefined = {} as MonthPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("serialNumber", monthPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(monthPostRequestBody.additionalData);
}
