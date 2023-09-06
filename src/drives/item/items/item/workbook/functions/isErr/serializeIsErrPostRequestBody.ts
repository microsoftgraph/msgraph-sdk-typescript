import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsErrPostRequestBody } from './isErrPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsErrPostRequestBody(writer: SerializationWriter, isErrPostRequestBody: IsErrPostRequestBody | undefined = {} as IsErrPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isErrPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isErrPostRequestBody.additionalData);
}
