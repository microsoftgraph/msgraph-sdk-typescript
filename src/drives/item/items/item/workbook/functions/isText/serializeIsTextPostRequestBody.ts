import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsTextPostRequestBody } from './isTextPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsTextPostRequestBody(writer: SerializationWriter, isTextPostRequestBody: IsTextPostRequestBody | undefined = {} as IsTextPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isTextPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isTextPostRequestBody.additionalData);
}
