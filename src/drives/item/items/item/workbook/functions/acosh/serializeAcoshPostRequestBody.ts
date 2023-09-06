import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AcoshPostRequestBody } from './acoshPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAcoshPostRequestBody(writer: SerializationWriter, acoshPostRequestBody: AcoshPostRequestBody | undefined = {} as AcoshPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", acoshPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acoshPostRequestBody.additionalData);
}
