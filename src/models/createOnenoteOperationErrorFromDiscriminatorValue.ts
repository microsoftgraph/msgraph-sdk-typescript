import { deserializeIntoOnenoteOperationError } from './deserializeIntoOnenoteOperationError';
import { type OnenoteOperationError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenoteOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteOperationError;
}
