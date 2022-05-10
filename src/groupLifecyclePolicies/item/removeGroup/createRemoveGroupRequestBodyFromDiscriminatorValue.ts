import {RemoveGroupRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveGroupRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveGroupRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveGroupRequestBodyImpl();
}
