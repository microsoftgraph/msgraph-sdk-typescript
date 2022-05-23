import {OnenoteOperationErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteOperationErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteOperationErrorImpl();
}
