import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AcotPostRequestBody } from './acotPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAcotPostRequestBody(writer: SerializationWriter, acotPostRequestBody: AcotPostRequestBody | undefined = {} as AcotPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", acotPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acotPostRequestBody.additionalData);
}
