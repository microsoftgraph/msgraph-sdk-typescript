import {WorkbookPivotTableImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookPivotTableFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookPivotTableImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookPivotTableImpl();
}
