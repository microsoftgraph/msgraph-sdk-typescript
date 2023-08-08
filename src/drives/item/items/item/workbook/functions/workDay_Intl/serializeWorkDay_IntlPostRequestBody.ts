import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {WorkDay_IntlPostRequestBody} from './workDay_IntlPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkDay_IntlPostRequestBody(writer: SerializationWriter, workDay_IntlPostRequestBody: WorkDay_IntlPostRequestBody | undefined = {} as WorkDay_IntlPostRequestBody) : void {
        writer.writeObjectValue<Json>("days", workDay_IntlPostRequestBody.days, serializeJson);
        writer.writeObjectValue<Json>("holidays", workDay_IntlPostRequestBody.holidays, serializeJson);
        writer.writeObjectValue<Json>("startDate", workDay_IntlPostRequestBody.startDate, serializeJson);
        writer.writeObjectValue<Json>("weekend", workDay_IntlPostRequestBody.weekend, serializeJson);
        writer.writeAdditionalData(workDay_IntlPostRequestBody.additionalData);
}
