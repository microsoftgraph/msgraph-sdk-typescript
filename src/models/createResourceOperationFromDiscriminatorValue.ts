import { deserializeIntoResourceOperation } from './deserializeIntoResourceOperation';
import { type ResourceOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceOperation;
}
