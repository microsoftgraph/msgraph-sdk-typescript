import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type PercentRank_ExcPostRequestBody } from './percentRank_ExcPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePercentRank_ExcPostRequestBody(writer: SerializationWriter, percentRank_ExcPostRequestBody: PercentRank_ExcPostRequestBody | undefined = {} as PercentRank_ExcPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", percentRank_ExcPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("significance", percentRank_ExcPostRequestBody.significance, serializeJson);
        writer.writeObjectValue<Json>("x", percentRank_ExcPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(percentRank_ExcPostRequestBody.additionalData);
}
