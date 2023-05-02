import {AddCopyFromContentTypeHubPostRequestBody} from './addCopyFromContentTypeHubPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddCopyFromContentTypeHubPostRequestBody(writer: SerializationWriter, addCopyFromContentTypeHubPostRequestBody: AddCopyFromContentTypeHubPostRequestBody | undefined = {} as AddCopyFromContentTypeHubPostRequestBody) : void {
        writer.writeStringValue("contentTypeId", addCopyFromContentTypeHubPostRequestBody.contentTypeId);
        writer.writeAdditionalData(addCopyFromContentTypeHubPostRequestBody.additionalData);
}
