import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type OrPostRequestBody } from './orPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOrPostRequestBody(writer: SerializationWriter, orPostRequestBody: OrPostRequestBody | undefined = {} as OrPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", orPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(orPostRequestBody.additionalData);
}
