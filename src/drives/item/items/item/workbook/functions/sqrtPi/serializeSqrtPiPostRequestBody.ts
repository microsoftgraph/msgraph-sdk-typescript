import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SqrtPiPostRequestBody } from './sqrtPiPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSqrtPiPostRequestBody(writer: SerializationWriter, sqrtPiPostRequestBody: SqrtPiPostRequestBody | undefined = {} as SqrtPiPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sqrtPiPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sqrtPiPostRequestBody.additionalData);
}
