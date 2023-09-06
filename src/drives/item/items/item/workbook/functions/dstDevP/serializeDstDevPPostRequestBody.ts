import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DstDevPPostRequestBody } from './dstDevPPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDstDevPPostRequestBody(writer: SerializationWriter, dstDevPPostRequestBody: DstDevPPostRequestBody | undefined = {} as DstDevPPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dstDevPPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dstDevPPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dstDevPPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dstDevPPostRequestBody.additionalData);
}
