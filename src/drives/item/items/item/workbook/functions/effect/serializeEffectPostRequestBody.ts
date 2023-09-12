import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type EffectPostRequestBody } from './effectPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEffectPostRequestBody(writer: SerializationWriter, effectPostRequestBody: EffectPostRequestBody | undefined = {} as EffectPostRequestBody) : void {
        writer.writeObjectValue<Json>("nominalRate", effectPostRequestBody.nominalRate, serializeJson);
        writer.writeObjectValue<Json>("npery", effectPostRequestBody.npery, serializeJson);
        writer.writeAdditionalData(effectPostRequestBody.additionalData);
}
