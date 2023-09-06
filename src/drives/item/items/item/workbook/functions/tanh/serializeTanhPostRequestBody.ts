import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TanhPostRequestBody } from './tanhPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTanhPostRequestBody(writer: SerializationWriter, tanhPostRequestBody: TanhPostRequestBody | undefined = {} as TanhPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", tanhPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(tanhPostRequestBody.additionalData);
}
