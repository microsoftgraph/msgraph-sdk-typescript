import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AndPostRequestBody } from './andPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAndPostRequestBody(writer: SerializationWriter, andPostRequestBody: AndPostRequestBody | undefined = {} as AndPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", andPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(andPostRequestBody.additionalData);
}
