import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LenPostRequestBody } from './lenPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLenPostRequestBody(writer: SerializationWriter, lenPostRequestBody: LenPostRequestBody | undefined = {} as LenPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", lenPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(lenPostRequestBody.additionalData);
}
