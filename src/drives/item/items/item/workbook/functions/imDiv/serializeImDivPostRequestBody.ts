import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImDivPostRequestBody } from './imDivPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImDivPostRequestBody(writer: SerializationWriter, imDivPostRequestBody: ImDivPostRequestBody | undefined = {} as ImDivPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber1", imDivPostRequestBody.inumber1, serializeJson);
        writer.writeObjectValue<Json>("inumber2", imDivPostRequestBody.inumber2, serializeJson);
        writer.writeAdditionalData(imDivPostRequestBody.additionalData);
}
