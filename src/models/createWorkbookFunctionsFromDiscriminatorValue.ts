import {deserializeIntoWorkbookFunctions} from './deserializeIntoWorkbookFunctions';
import {WorkbookFunctions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFunctionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFunctions;
}
