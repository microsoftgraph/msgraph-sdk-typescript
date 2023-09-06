import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImArgumentPostRequestBody } from './imArgumentPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImArgumentPostRequestBody(writer: SerializationWriter, imArgumentPostRequestBody: ImArgumentPostRequestBody | undefined = {} as ImArgumentPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imArgumentPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imArgumentPostRequestBody.additionalData);
}
