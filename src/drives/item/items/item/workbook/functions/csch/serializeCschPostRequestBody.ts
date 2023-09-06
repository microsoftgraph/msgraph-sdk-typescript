import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CschPostRequestBody } from './cschPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCschPostRequestBody(writer: SerializationWriter, cschPostRequestBody: CschPostRequestBody | undefined = {} as CschPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", cschPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cschPostRequestBody.additionalData);
}
