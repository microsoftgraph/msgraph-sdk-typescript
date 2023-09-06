import { type Json } from '../../../../../../../../../models/json';
import { serializeJson } from '../../../../../../../../../models/serializeJson';
import { type AddPostRequestBody } from './addPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : void {
        writer.writeStringValue("seriesBy", addPostRequestBody.seriesBy);
        writer.writeObjectValue<Json>("sourceData", addPostRequestBody.sourceData, serializeJson);
        writer.writeStringValue("type", addPostRequestBody.type);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
