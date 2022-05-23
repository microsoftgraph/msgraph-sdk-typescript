import {CancelMediaProcessingOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CancelMediaProcessingOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CancelMediaProcessingOperationImpl();
}
