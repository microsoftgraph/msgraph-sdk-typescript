import { type AddCopyFromContentTypeHubPostRequestBody } from './addCopyFromContentTypeHubPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddCopyFromContentTypeHubPostRequestBody(writer: SerializationWriter, addCopyFromContentTypeHubPostRequestBody: AddCopyFromContentTypeHubPostRequestBody | undefined = {} as AddCopyFromContentTypeHubPostRequestBody) : void {
        writer.writeStringValue("contentTypeId", addCopyFromContentTypeHubPostRequestBody.contentTypeId);
        writer.writeAdditionalData(addCopyFromContentTypeHubPostRequestBody.additionalData);
}
