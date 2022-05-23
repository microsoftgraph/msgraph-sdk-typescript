import {ConnectionOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectionOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectionOperationImpl();
}
