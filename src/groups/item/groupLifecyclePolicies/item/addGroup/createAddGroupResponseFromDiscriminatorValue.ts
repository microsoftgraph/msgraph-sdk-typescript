import {AddGroupResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddGroupResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddGroupResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddGroupResponseImpl();
}
