import {WorkbookFunctions} from './workbookFunctions';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFunctionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookFunctions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookFunctions();
}
