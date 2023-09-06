import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Z_TestPostRequestBody } from './z_TestPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeZ_TestPostRequestBody(writer: SerializationWriter, z_TestPostRequestBody: Z_TestPostRequestBody | undefined = {} as Z_TestPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", z_TestPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("sigma", z_TestPostRequestBody.sigma, serializeJson);
        writer.writeObjectValue<Json>("x", z_TestPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(z_TestPostRequestBody.additionalData);
}
