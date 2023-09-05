import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ExpPostRequestBody } from './expPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExpPostRequestBody(writer: SerializationWriter, expPostRequestBody: ExpPostRequestBody | undefined = {} as ExpPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", expPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(expPostRequestBody.additionalData);
}
