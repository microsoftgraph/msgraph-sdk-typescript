import {WorkbookOperation} from './workbookOperation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookOperation();
}
