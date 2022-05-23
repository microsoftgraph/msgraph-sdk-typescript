import {ResourceOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceOperationImpl();
}
