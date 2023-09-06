import { deserializeIntoWorkbookFunctions } from './deserializeIntoWorkbookFunctions';
import { type WorkbookFunctions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookFunctionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFunctions;
}
