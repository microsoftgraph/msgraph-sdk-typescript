import {deserializeIntoResourceOperation} from './deserializeIntoResourceOperation';
import {ResourceOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceOperation;
}
