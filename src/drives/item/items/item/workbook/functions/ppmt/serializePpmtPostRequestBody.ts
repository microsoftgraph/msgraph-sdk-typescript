import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type PpmtPostRequestBody } from './ppmtPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePpmtPostRequestBody(writer: SerializationWriter, ppmtPostRequestBody: PpmtPostRequestBody | undefined = {} as PpmtPostRequestBody) : void {
        writer.writeObjectValue<Json>("fv", ppmtPostRequestBody.fv, serializeJson);
        writer.writeObjectValue<Json>("nper", ppmtPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("per", ppmtPostRequestBody.per, serializeJson);
        writer.writeObjectValue<Json>("pv", ppmtPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", ppmtPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("type", ppmtPostRequestBody.type, serializeJson);
        writer.writeAdditionalData(ppmtPostRequestBody.additionalData);
}
