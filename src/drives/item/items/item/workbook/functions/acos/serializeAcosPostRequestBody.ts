import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AcosPostRequestBody } from './acosPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAcosPostRequestBody(writer: SerializationWriter, acosPostRequestBody: AcosPostRequestBody | undefined = {} as AcosPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", acosPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acosPostRequestBody.additionalData);
}
