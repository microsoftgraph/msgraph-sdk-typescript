import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImLnPostRequestBody } from './imLnPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImLnPostRequestBody(writer: SerializationWriter, imLnPostRequestBody: ImLnPostRequestBody | undefined = {} as ImLnPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imLnPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imLnPostRequestBody.additionalData);
}
