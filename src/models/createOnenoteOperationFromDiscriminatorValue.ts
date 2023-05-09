import {deserializeIntoOnenoteOperation} from './deserializeIntoOnenoteOperation';
import {OnenoteOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteOperation;
}
