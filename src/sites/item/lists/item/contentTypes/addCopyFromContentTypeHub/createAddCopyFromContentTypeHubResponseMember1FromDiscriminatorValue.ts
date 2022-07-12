import {AddCopyFromContentTypeHubResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyFromContentTypeHubResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyFromContentTypeHubResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyFromContentTypeHubResponseMember1();
}
