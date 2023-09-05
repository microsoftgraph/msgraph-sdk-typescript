import { deserializeIntoWorkbookOperationError } from './deserializeIntoWorkbookOperationError';
import { type WorkbookOperationError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookOperationError;
}
