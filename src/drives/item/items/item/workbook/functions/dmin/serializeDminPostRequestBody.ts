import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DminPostRequestBody } from './dminPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDminPostRequestBody(writer: SerializationWriter, dminPostRequestBody: DminPostRequestBody | undefined = {} as DminPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dminPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dminPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dminPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dminPostRequestBody.additionalData);
}
