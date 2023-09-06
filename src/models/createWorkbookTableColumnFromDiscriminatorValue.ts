import { deserializeIntoWorkbookTableColumn } from './deserializeIntoWorkbookTableColumn';
import { type WorkbookTableColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookTableColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableColumn;
}
