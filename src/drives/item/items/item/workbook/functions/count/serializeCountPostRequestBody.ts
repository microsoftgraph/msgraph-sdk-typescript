import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CountPostRequestBody } from './countPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCountPostRequestBody(writer: SerializationWriter, countPostRequestBody: CountPostRequestBody | undefined = {} as CountPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", countPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(countPostRequestBody.additionalData);
}
