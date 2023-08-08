import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {YearFracPostRequestBody} from './yearFracPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeYearFracPostRequestBody(writer: SerializationWriter, yearFracPostRequestBody: YearFracPostRequestBody | undefined = {} as YearFracPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", yearFracPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("endDate", yearFracPostRequestBody.endDate, serializeJson);
        writer.writeObjectValue<Json>("startDate", yearFracPostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(yearFracPostRequestBody.additionalData);
}
