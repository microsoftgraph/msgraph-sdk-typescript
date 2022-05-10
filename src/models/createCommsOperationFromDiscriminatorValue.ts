import {CommsOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommsOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CommsOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CommsOperationImpl();
}
