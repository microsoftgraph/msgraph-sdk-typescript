import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type VdbPostRequestBody } from './vdbPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeVdbPostRequestBody(writer: SerializationWriter, vdbPostRequestBody: VdbPostRequestBody | undefined = {} as VdbPostRequestBody) : void {
        writer.writeObjectValue<Json>("cost", vdbPostRequestBody.cost, serializeJson);
        writer.writeObjectValue<Json>("endPeriod", vdbPostRequestBody.endPeriod, serializeJson);
        writer.writeObjectValue<Json>("factor", vdbPostRequestBody.factor, serializeJson);
        writer.writeObjectValue<Json>("life", vdbPostRequestBody.life, serializeJson);
        writer.writeObjectValue<Json>("noSwitch", vdbPostRequestBody.noSwitch, serializeJson);
        writer.writeObjectValue<Json>("salvage", vdbPostRequestBody.salvage, serializeJson);
        writer.writeObjectValue<Json>("startPeriod", vdbPostRequestBody.startPeriod, serializeJson);
        writer.writeAdditionalData(vdbPostRequestBody.additionalData);
}
