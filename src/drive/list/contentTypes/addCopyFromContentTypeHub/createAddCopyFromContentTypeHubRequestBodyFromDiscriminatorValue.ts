import {AddCopyFromContentTypeHubRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyFromContentTypeHubRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyFromContentTypeHubRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyFromContentTypeHubRequestBodyImpl();
}
