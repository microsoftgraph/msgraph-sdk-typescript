import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SmallPostRequestBody } from './smallPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSmallPostRequestBody(writer: SerializationWriter, smallPostRequestBody: SmallPostRequestBody | undefined = {} as SmallPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", smallPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("k", smallPostRequestBody.k, serializeJson);
        writer.writeAdditionalData(smallPostRequestBody.additionalData);
}
