import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsLogicalPostRequestBody } from './isLogicalPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsLogicalPostRequestBody(writer: SerializationWriter, isLogicalPostRequestBody: IsLogicalPostRequestBody | undefined = {} as IsLogicalPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isLogicalPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isLogicalPostRequestBody.additionalData);
}
