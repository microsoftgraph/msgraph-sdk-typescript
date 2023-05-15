import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {EoMonthPostRequestBody} from './eoMonthPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEoMonthPostRequestBody(writer: SerializationWriter, eoMonthPostRequestBody: EoMonthPostRequestBody | undefined = {} as EoMonthPostRequestBody) : void {
        writer.writeObjectValue<Json>("months", eoMonthPostRequestBody.months, serializeJson);
        writer.writeObjectValue<Json>("startDate", eoMonthPostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(eoMonthPostRequestBody.additionalData);
}
