import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImCoshPostRequestBody } from './imCoshPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImCoshPostRequestBody(writer: SerializationWriter, imCoshPostRequestBody: ImCoshPostRequestBody | undefined = {} as ImCoshPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imCoshPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCoshPostRequestBody.additionalData);
}
