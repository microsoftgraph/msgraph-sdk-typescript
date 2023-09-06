import { deserializeIntoWorkbookOperation } from './deserializeIntoWorkbookOperation';
import { type WorkbookOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookOperation;
}
