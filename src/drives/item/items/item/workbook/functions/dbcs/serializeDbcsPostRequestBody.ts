import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DbcsPostRequestBody } from './dbcsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDbcsPostRequestBody(writer: SerializationWriter, dbcsPostRequestBody: DbcsPostRequestBody | undefined = {} as DbcsPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", dbcsPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(dbcsPostRequestBody.additionalData);
}
