import {AddCopyFromContentTypeHubRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyFromContentTypeHubRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyFromContentTypeHubRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyFromContentTypeHubRequestBody();
}
