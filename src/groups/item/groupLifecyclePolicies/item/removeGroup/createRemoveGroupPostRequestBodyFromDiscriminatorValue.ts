import {RemoveGroupPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveGroupPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveGroupPostRequestBodyImpl();
}
