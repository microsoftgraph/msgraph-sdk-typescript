import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type XirrPostRequestBody } from './xirrPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeXirrPostRequestBody(writer: SerializationWriter, xirrPostRequestBody: XirrPostRequestBody | undefined = {} as XirrPostRequestBody) : void {
        writer.writeObjectValue<Json>("dates", xirrPostRequestBody.dates, serializeJson);
        writer.writeObjectValue<Json>("guess", xirrPostRequestBody.guess, serializeJson);
        writer.writeObjectValue<Json>("values", xirrPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(xirrPostRequestBody.additionalData);
}
