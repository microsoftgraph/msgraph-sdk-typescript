import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {YearPostRequestBody} from './yearPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeYearPostRequestBody(writer: SerializationWriter, yearPostRequestBody: YearPostRequestBody | undefined = {} as YearPostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", yearPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(yearPostRequestBody.additionalData);
}
