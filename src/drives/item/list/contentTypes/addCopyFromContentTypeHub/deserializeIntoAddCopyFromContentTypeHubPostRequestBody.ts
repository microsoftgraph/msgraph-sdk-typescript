import type {AddCopyFromContentTypeHubPostRequestBody} from './addCopyFromContentTypeHubPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddCopyFromContentTypeHubPostRequestBody(addCopyFromContentTypeHubPostRequestBody: AddCopyFromContentTypeHubPostRequestBody | undefined = {} as AddCopyFromContentTypeHubPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "contentTypeId": n => { addCopyFromContentTypeHubPostRequestBody.contentTypeId = n.getStringValue(); },
    }
}
