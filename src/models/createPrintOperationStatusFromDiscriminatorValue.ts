import { deserializeIntoPrintOperationStatus } from './deserializeIntoPrintOperationStatus';
import { type PrintOperationStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintOperationStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintOperationStatus;
}
