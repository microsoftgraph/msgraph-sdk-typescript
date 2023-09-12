import { deserializeIntoWorkbookPivotTable } from './deserializeIntoWorkbookPivotTable';
import { type WorkbookPivotTable } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookPivotTableFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookPivotTable;
}
