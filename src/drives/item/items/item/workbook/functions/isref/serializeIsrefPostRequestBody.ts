import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsrefPostRequestBody } from './isrefPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsrefPostRequestBody(writer: SerializationWriter, isrefPostRequestBody: IsrefPostRequestBody | undefined = {} as IsrefPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isrefPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isrefPostRequestBody.additionalData);
}
