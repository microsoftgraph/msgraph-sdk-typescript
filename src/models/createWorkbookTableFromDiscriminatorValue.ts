import { deserializeIntoWorkbookTable } from './deserializeIntoWorkbookTable';
import { type WorkbookTable } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookTableFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTable;
}
