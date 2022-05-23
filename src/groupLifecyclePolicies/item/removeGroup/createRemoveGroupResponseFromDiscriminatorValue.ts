import {RemoveGroupResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveGroupResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveGroupResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveGroupResponseImpl();
}
