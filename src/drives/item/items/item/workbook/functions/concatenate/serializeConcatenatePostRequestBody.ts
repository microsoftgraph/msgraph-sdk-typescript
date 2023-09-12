import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ConcatenatePostRequestBody } from './concatenatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConcatenatePostRequestBody(writer: SerializationWriter, concatenatePostRequestBody: ConcatenatePostRequestBody | undefined = {} as ConcatenatePostRequestBody) : void {
        writer.writeObjectValue<Json>("values", concatenatePostRequestBody.values, serializeJson);
        writer.writeAdditionalData(concatenatePostRequestBody.additionalData);
}
