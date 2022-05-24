import {AddCopyPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyPostRequestBodyImpl();
}
