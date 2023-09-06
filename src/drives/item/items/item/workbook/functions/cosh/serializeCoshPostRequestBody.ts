import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CoshPostRequestBody } from './coshPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCoshPostRequestBody(writer: SerializationWriter, coshPostRequestBody: CoshPostRequestBody | undefined = {} as CoshPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", coshPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(coshPostRequestBody.additionalData);
}
