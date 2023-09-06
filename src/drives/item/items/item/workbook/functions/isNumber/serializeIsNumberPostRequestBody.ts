import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsNumberPostRequestBody } from './isNumberPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsNumberPostRequestBody(writer: SerializationWriter, isNumberPostRequestBody: IsNumberPostRequestBody | undefined = {} as IsNumberPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isNumberPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isNumberPostRequestBody.additionalData);
}
