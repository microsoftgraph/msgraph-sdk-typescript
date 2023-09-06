import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ChiSq_DistPostRequestBody } from './chiSq_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChiSq_DistPostRequestBody(writer: SerializationWriter, chiSq_DistPostRequestBody: ChiSq_DistPostRequestBody | undefined = {} as ChiSq_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", chiSq_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("degFreedom", chiSq_DistPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("x", chiSq_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(chiSq_DistPostRequestBody.additionalData);
}
