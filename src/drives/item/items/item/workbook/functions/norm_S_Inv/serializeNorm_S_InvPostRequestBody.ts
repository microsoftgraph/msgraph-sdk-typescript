import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Norm_S_InvPostRequestBody } from './norm_S_InvPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNorm_S_InvPostRequestBody(writer: SerializationWriter, norm_S_InvPostRequestBody: Norm_S_InvPostRequestBody | undefined = {} as Norm_S_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("probability", norm_S_InvPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(norm_S_InvPostRequestBody.additionalData);
}
