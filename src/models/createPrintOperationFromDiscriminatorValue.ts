import {PrintOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintOperationImpl();
}
