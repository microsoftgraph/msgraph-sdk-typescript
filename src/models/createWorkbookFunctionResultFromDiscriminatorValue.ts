import { deserializeIntoWorkbookFunctionResult } from './deserializeIntoWorkbookFunctionResult';
import { type WorkbookFunctionResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookFunctionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFunctionResult;
}
