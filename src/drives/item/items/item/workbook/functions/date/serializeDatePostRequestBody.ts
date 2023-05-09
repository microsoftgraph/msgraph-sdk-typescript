import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DatePostRequestBody} from './datePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDatePostRequestBody(writer: SerializationWriter, datePostRequestBody: DatePostRequestBody | undefined = {} as DatePostRequestBody) : void {
        writer.writeObjectValue<Json>("day", datePostRequestBody.day, serializeJson);
        writer.writeObjectValue<Json>("month", datePostRequestBody.month, serializeJson);
        writer.writeObjectValue<Json>("year", datePostRequestBody.year, serializeJson);
        writer.writeAdditionalData(datePostRequestBody.additionalData);
}
