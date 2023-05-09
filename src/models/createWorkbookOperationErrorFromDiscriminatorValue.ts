import {deserializeIntoWorkbookOperationError} from './deserializeIntoWorkbookOperationError';
import {WorkbookOperationError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookOperationError;
}
