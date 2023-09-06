import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type GaussPostRequestBody } from './gaussPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGaussPostRequestBody(writer: SerializationWriter, gaussPostRequestBody: GaussPostRequestBody | undefined = {} as GaussPostRequestBody) : void {
        writer.writeObjectValue<Json>("x", gaussPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gaussPostRequestBody.additionalData);
}
