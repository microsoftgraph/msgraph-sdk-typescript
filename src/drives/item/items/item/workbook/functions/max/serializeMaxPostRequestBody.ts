import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MaxPostRequestBody } from './maxPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMaxPostRequestBody(writer: SerializationWriter, maxPostRequestBody: MaxPostRequestBody | undefined = {} as MaxPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", maxPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(maxPostRequestBody.additionalData);
}
