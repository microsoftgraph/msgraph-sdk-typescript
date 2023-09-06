import { deserializeIntoWorkbookTableRow } from './deserializeIntoWorkbookTableRow';
import { type WorkbookTableRow } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookTableRowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableRow;
}
