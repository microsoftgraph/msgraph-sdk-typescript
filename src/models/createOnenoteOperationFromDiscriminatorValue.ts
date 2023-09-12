import { deserializeIntoOnenoteOperation } from './deserializeIntoOnenoteOperation';
import { type OnenoteOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenoteOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteOperation;
}
