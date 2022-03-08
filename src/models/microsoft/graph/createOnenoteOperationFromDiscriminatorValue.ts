import {OnenoteOperation} from './onenoteOperation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteOperation();
}
