import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ErfC_PrecisePostRequestBody } from './erfC_PrecisePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeErfC_PrecisePostRequestBody(writer: SerializationWriter, erfC_PrecisePostRequestBody: ErfC_PrecisePostRequestBody | undefined = {} as ErfC_PrecisePostRequestBody) : void {
        writer.writeObjectValue<Json>("x", erfC_PrecisePostRequestBody.x, serializeJson);
        writer.writeAdditionalData(erfC_PrecisePostRequestBody.additionalData);
}
