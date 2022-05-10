import {PrintOperationStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintOperationStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintOperationStatusImpl();
}
