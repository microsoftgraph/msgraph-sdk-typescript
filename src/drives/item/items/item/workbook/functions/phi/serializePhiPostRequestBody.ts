import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type PhiPostRequestBody } from './phiPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePhiPostRequestBody(writer: SerializationWriter, phiPostRequestBody: PhiPostRequestBody | undefined = {} as PhiPostRequestBody) : void {
        writer.writeObjectValue<Json>("x", phiPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(phiPostRequestBody.additionalData);
}
