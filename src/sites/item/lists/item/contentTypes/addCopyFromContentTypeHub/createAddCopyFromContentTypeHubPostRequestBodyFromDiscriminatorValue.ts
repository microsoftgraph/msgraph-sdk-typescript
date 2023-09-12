import { deserializeIntoAddCopyFromContentTypeHubPostRequestBody } from './deserializeIntoAddCopyFromContentTypeHubPostRequestBody';
import { type AddCopyFromContentTypeHubPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddCopyFromContentTypeHubPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddCopyFromContentTypeHubPostRequestBody;
}
