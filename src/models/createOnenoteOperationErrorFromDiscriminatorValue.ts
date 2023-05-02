import {deserializeIntoOnenoteOperationError} from './deserializeIntoOnenoteOperationError';
import {OnenoteOperationError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteOperationError;
}
