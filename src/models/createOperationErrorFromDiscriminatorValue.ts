import {OperationErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : OperationErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OperationErrorImpl();
}
