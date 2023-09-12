import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Erf_PrecisePostRequestBody } from './erf_PrecisePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeErf_PrecisePostRequestBody(writer: SerializationWriter, erf_PrecisePostRequestBody: Erf_PrecisePostRequestBody | undefined = {} as Erf_PrecisePostRequestBody) : void {
        writer.writeObjectValue<Json>("x", erf_PrecisePostRequestBody.x, serializeJson);
        writer.writeAdditionalData(erf_PrecisePostRequestBody.additionalData);
}
