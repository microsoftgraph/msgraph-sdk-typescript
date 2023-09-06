import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsNAPostRequestBody } from './isNAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsNAPostRequestBody(writer: SerializationWriter, isNAPostRequestBody: IsNAPostRequestBody | undefined = {} as IsNAPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isNAPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isNAPostRequestBody.additionalData);
}
