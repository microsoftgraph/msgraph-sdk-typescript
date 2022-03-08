import {PrintOperationStatus} from './printOperationStatus';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintOperationStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintOperationStatus();
}
