import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type BesselJPostRequestBody } from './besselJPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBesselJPostRequestBody(writer: SerializationWriter, besselJPostRequestBody: BesselJPostRequestBody | undefined = {} as BesselJPostRequestBody) : void {
        writer.writeObjectValue<Json>("n", besselJPostRequestBody.n, serializeJson);
        writer.writeObjectValue<Json>("x", besselJPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(besselJPostRequestBody.additionalData);
}
