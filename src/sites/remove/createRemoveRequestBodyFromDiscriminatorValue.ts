import {RemoveRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveRequestBodyImpl();
}
