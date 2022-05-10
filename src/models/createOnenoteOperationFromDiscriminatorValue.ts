import {OnenoteOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteOperationImpl();
}
