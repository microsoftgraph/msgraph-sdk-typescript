import {AddGroupPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddGroupPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddGroupPostRequestBodyImpl();
}
