import {AddCopyFromContentTypeHubPostRequestBody} from './addCopyFromContentTypeHubPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddCopyFromContentTypeHubPostRequestBody(addCopyFromContentTypeHubPostRequestBody: AddCopyFromContentTypeHubPostRequestBody | undefined = {} as AddCopyFromContentTypeHubPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("contentTypeId", addCopyFromContentTypeHubPostRequestBody.contentTypeId);
        writer.writeAdditionalData(addCopyFromContentTypeHubPostRequestBody.additionalData);
}
