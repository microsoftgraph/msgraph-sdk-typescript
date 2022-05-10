import {OperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : OperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OperationImpl();
}
