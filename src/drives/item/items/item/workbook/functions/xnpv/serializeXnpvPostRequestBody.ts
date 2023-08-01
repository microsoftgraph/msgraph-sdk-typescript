import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {XnpvPostRequestBody} from './xnpvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeXnpvPostRequestBody(writer: SerializationWriter, xnpvPostRequestBody: XnpvPostRequestBody | undefined = {} as XnpvPostRequestBody) : void {
        writer.writeObjectValue<Json>("dates", xnpvPostRequestBody.dates, serializeJson);
        writer.writeObjectValue<Json>("rate", xnpvPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("values", xnpvPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(xnpvPostRequestBody.additionalData);
}
