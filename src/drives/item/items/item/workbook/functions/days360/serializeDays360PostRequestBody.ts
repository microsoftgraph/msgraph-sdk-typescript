import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Days360PostRequestBody} from './days360PostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDays360PostRequestBody(writer: SerializationWriter, days360PostRequestBody: Days360PostRequestBody | undefined = {} as Days360PostRequestBody) : void {
        writer.writeObjectValue<Json>("endDate", days360PostRequestBody.endDate, serializeJson);
        writer.writeObjectValue<Json>("method", days360PostRequestBody.method, serializeJson);
        writer.writeObjectValue<Json>("startDate", days360PostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(days360PostRequestBody.additionalData);
}
