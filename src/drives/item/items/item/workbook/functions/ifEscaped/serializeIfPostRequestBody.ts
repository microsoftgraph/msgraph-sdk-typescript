import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IfPostRequestBody } from './ifPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIfPostRequestBody(writer: SerializationWriter, ifPostRequestBody: IfPostRequestBody | undefined = {} as IfPostRequestBody) : void {
        writer.writeObjectValue<Json>("logicalTest", ifPostRequestBody.logicalTest, serializeJson);
        writer.writeObjectValue<Json>("valueIfFalse", ifPostRequestBody.valueIfFalse, serializeJson);
        writer.writeObjectValue<Json>("valueIfTrue", ifPostRequestBody.valueIfTrue, serializeJson);
        writer.writeAdditionalData(ifPostRequestBody.additionalData);
}
