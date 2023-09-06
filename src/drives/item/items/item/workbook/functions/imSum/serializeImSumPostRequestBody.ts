import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImSumPostRequestBody } from './imSumPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImSumPostRequestBody(writer: SerializationWriter, imSumPostRequestBody: ImSumPostRequestBody | undefined = {} as ImSumPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", imSumPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(imSumPostRequestBody.additionalData);
}
