import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CscPostRequestBody } from './cscPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCscPostRequestBody(writer: SerializationWriter, cscPostRequestBody: CscPostRequestBody | undefined = {} as CscPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", cscPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cscPostRequestBody.additionalData);
}
