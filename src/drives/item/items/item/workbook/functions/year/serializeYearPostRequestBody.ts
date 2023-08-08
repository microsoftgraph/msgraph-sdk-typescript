import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {YearPostRequestBody} from './yearPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeYearPostRequestBody(writer: SerializationWriter, yearPostRequestBody: YearPostRequestBody | undefined = {} as YearPostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", yearPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(yearPostRequestBody.additionalData);
}
