import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CothPostRequestBody } from './cothPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCothPostRequestBody(writer: SerializationWriter, cothPostRequestBody: CothPostRequestBody | undefined = {} as CothPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", cothPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cothPostRequestBody.additionalData);
}
