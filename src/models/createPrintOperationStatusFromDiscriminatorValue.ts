import {deserializeIntoPrintOperationStatus} from './deserializeIntoPrintOperationStatus';
import {PrintOperationStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintOperationStatus;
}
