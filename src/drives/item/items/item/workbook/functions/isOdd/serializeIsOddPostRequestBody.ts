import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsOddPostRequestBody } from './isOddPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsOddPostRequestBody(writer: SerializationWriter, isOddPostRequestBody: IsOddPostRequestBody | undefined = {} as IsOddPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", isOddPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(isOddPostRequestBody.additionalData);
}
