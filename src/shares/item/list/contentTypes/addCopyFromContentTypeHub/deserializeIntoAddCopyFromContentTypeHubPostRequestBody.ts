import { type AddCopyFromContentTypeHubPostRequestBody } from './addCopyFromContentTypeHubPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAddCopyFromContentTypeHubPostRequestBody(addCopyFromContentTypeHubPostRequestBody: AddCopyFromContentTypeHubPostRequestBody | undefined = {} as AddCopyFromContentTypeHubPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "contentTypeId": n => { addCopyFromContentTypeHubPostRequestBody.contentTypeId = n.getStringValue(); },
    }
}
