import {WorkbookTable} from './workbookTable';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTable {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTable();
}
