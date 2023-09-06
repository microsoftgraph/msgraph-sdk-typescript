import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImSecPostRequestBody } from './imSecPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImSecPostRequestBody(writer: SerializationWriter, imSecPostRequestBody: ImSecPostRequestBody | undefined = {} as ImSecPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imSecPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSecPostRequestBody.additionalData);
}
