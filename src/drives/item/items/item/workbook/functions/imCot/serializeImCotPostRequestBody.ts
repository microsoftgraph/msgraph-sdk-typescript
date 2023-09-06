import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImCotPostRequestBody } from './imCotPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImCotPostRequestBody(writer: SerializationWriter, imCotPostRequestBody: ImCotPostRequestBody | undefined = {} as ImCotPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imCotPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCotPostRequestBody.additionalData);
}
