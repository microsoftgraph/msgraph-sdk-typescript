import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AcothPostRequestBody } from './acothPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAcothPostRequestBody(writer: SerializationWriter, acothPostRequestBody: AcothPostRequestBody | undefined = {} as AcothPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", acothPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acothPostRequestBody.additionalData);
}
