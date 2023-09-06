import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AsinPostRequestBody } from './asinPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAsinPostRequestBody(writer: SerializationWriter, asinPostRequestBody: AsinPostRequestBody | undefined = {} as AsinPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", asinPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(asinPostRequestBody.additionalData);
}
