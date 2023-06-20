import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Days360PostRequestBody} from './days360PostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDays360PostRequestBody(days360PostRequestBody: Days360PostRequestBody | undefined = {} as Days360PostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("endDate", days360PostRequestBody.endDate, serializeJson);
        writer.writeObjectValue<Json>("method", days360PostRequestBody.method, serializeJson);
        writer.writeObjectValue<Json>("startDate", days360PostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(days360PostRequestBody.additionalData);
}
