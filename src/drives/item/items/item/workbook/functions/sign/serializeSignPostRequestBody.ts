import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SignPostRequestBody } from './signPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSignPostRequestBody(writer: SerializationWriter, signPostRequestBody: SignPostRequestBody | undefined = {} as SignPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", signPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(signPostRequestBody.additionalData);
}
