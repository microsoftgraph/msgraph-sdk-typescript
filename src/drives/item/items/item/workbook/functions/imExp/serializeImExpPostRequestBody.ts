import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImExpPostRequestBody } from './imExpPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImExpPostRequestBody(writer: SerializationWriter, imExpPostRequestBody: ImExpPostRequestBody | undefined = {} as ImExpPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imExpPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imExpPostRequestBody.additionalData);
}
