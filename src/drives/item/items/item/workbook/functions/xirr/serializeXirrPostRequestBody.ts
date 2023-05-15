import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {XirrPostRequestBody} from './xirrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeXirrPostRequestBody(writer: SerializationWriter, xirrPostRequestBody: XirrPostRequestBody | undefined = {} as XirrPostRequestBody) : void {
        writer.writeObjectValue<Json>("dates", xirrPostRequestBody.dates, serializeJson);
        writer.writeObjectValue<Json>("guess", xirrPostRequestBody.guess, serializeJson);
        writer.writeObjectValue<Json>("values", xirrPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(xirrPostRequestBody.additionalData);
}
