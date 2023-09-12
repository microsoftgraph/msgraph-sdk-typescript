import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type NominalPostRequestBody } from './nominalPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNominalPostRequestBody(writer: SerializationWriter, nominalPostRequestBody: NominalPostRequestBody | undefined = {} as NominalPostRequestBody) : void {
        writer.writeObjectValue<Json>("effectRate", nominalPostRequestBody.effectRate, serializeJson);
        writer.writeObjectValue<Json>("npery", nominalPostRequestBody.npery, serializeJson);
        writer.writeAdditionalData(nominalPostRequestBody.additionalData);
}
