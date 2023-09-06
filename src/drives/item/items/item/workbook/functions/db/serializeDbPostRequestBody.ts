import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DbPostRequestBody } from './dbPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDbPostRequestBody(writer: SerializationWriter, dbPostRequestBody: DbPostRequestBody | undefined = {} as DbPostRequestBody) : void {
        writer.writeObjectValue<Json>("cost", dbPostRequestBody.cost, serializeJson);
        writer.writeObjectValue<Json>("life", dbPostRequestBody.life, serializeJson);
        writer.writeObjectValue<Json>("month", dbPostRequestBody.month, serializeJson);
        writer.writeObjectValue<Json>("period", dbPostRequestBody.period, serializeJson);
        writer.writeObjectValue<Json>("salvage", dbPostRequestBody.salvage, serializeJson);
        writer.writeAdditionalData(dbPostRequestBody.additionalData);
}
