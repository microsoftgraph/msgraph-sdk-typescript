import {AddCopyFromContentTypeHubPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyFromContentTypeHubPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyFromContentTypeHubPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyFromContentTypeHubPostRequestBodyImpl();
}
